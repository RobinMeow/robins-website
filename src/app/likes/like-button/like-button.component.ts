import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IpAddressService, LikeRepository } from '@likes';

@Component({
  selector: 'likes-like-button',
  standalone: true,
  imports: [],
  templateUrl: './like-button.component.html',
  styleUrl: './like-button.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LikeButtonComponent {
  protected likes: number = -1;

  constructor(
    private readonly _ipAddressService: IpAddressService,
    private readonly _likeRepository: LikeRepository,
    private readonly _snackBar: MatSnackBar
  ) {
    this.loadLikes();
  }

  protected heartState: string = '';

  private changeHeartState(newState: string) {
    this.heartState = newState;
  }

  protected badgeState: string = '';

  private changeBadgeState(newState: string) {
    this.badgeState = newState;
  }

  private async loadLikes(): Promise<void> {
    try {
      this.likes = await this._likeRepository.getCountAsync();
    } catch (error) {
      console.warn('Could not retrieve like count from server.', error);
    }
  }

  protected async onClickAsync(): Promise<void> {
    try {
      const promiseIpify: Promise<IpAddressIpify> =
        this._ipAddressService.getIPAddress$(); // uneccessary micro optimization
      this.changeHeartState('beatIt');
      const ipify: IpAddressIpify = await promiseIpify;
      const hasLikedAlready: boolean =
        await this._likeRepository.hasLikedAlreadyAsync(ipify.ip);

      if (hasLikedAlready) {
        this.showThanksForTheLike();
        return;
      }

      await this._likeRepository.addLikeAsync(ipify.ip);
      this.loadLikes();
      this.changeBadgeState('beatIt');
      this.showThanksForTheLike();
    } catch (error) {
      this._snackBar.openFromComponent(LikeErrorComponent);
    }
  }

  private showThanksForTheLike(): void {
    this._snackBar.openFromComponent(ThanksForTheLikeComponent, {
      duration: 3500,
    });
  }
}
