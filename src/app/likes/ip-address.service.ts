import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IpAddressIpify } from '@likes';
import { Observable, firstValueFrom } from 'rxjs';

const URL_GET_IP_ADDRESS_IPIFY: string = 'https://api.ipify.org/?format=json';

@Injectable({
  providedIn: 'root',
})
export class IpAddressService {
  private readonly _httpClient = inject(HttpClient);

  getIPAddress$(): Promise<IpAddressIpify> {
    const ipAddressIpify$: Observable<IpAddressIpify> =
      this._httpClient.get<IpAddressIpify>(URL_GET_IP_ADDRESS_IPIFY, {
        responseType: 'json',
      });
    return firstValueFrom(ipAddressIpify$);
  }
}
