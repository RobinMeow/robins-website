import { Injectable, inject } from '@angular/core';
import { query } from 'express';

@Injectable({
  providedIn: 'root',
})
export class LikeRepository {
  private readonly _firestore: Firestore = inject(Firestore);
  private readonly _likesCollection!: CollectionReference<DocumentData>;
  /** storing previously read IPs, within this session, to avoid unneccessary round trips to the database when spamming the like button */
  private readonly _identityMap: Array<string> = new Array<string>();

  constructor() {
    this._likesCollection = collection(this._firestore, COLLECTION_NAME); // is this keeping DBIndexed open?
  }

  async getCountAsync(): Promise<number> {
    const snap = await getCountFromServer(this._likesCollection);
    return snap.data().count;
  }

  async addLikeAsync(ip: string): Promise<DocumentReference> {
    if (!isValidAddress(ip))
      throw new Error(`Cannot add invalid ip address. '${ip}'`);
    if (await this.hasLikedAlreadyAsync(ip))
      throw new Error(`'${ip}' has already liked.`);

    const documentReference = await addDoc(this._likesCollection, {
      ip,
      createdAt: serverTimestamp(),
    });
    this.addIpToLikesCache(ip);
    return documentReference;
  }

  private async ipExistsAsync(ip: string): Promise<boolean> {
    const getLikeByIp = query(this._likesCollection, where('ip', '==', ip));

    // use count instead of retrieving the document => for better performance and less network load
    const snap = await getCountFromServer(getLikeByIp);

    const hasLiked: boolean = snap.data().count == 1;

    if (hasLiked) {
      this.addIpToLikesCache(ip);
    }

    return hasLiked;
  }

  private addIpToLikesCache(ip: string): void {
    if (this._identityMap.indexOf(ip) != -1)
      throw new Error('Tried to cache ip, which was already cached.');

    this._identityMap.push(ip);
  }

  private likesCacheHasIp(ip: string): boolean {
    return this._identityMap.indexOf(ip) != -1;
  }

  async hasLikedAlreadyAsync(ip: string): Promise<boolean> {
    const hasLikedAlready: boolean = this.likesCacheHasIp(ip);

    return hasLikedAlready ? hasLikedAlready : this.ipExistsAsync(ip);
  }
}

function isValidAddress(ip: string): boolean {
  return (
    ip != null &&
    ip != undefined &&
    ip != '' &&
    (ip.indexOf('.') != -1 || ip.indexOf(':') != -1)
  ); // v4 or v6
}
