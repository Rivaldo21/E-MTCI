import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class OneSignalService {
  private oneSignal: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.oneSignal = (window as any).OneSignal || [];
      this.initializeOneSignal();
    }
  }

  private initializeOneSignal() {
    this.oneSignal.push(() => {
      this.oneSignal.init({
        appId: '56431560-874a-469c-8f90-a74b250a8610', // OneSignal App ID
        allowLocalhostAsSecureOrigin: true,
        notifyButton: {
          enable: true,
        },
      });
    });
  }

  public subscribeUser() {
    if (isPlatformBrowser(this.platformId)) {
      this.oneSignal.push(() => {
        this.oneSignal.showNativePrompt();
      });
    }
  }

  public getUserId() {
    if (isPlatformBrowser(this.platformId)) {
      this.oneSignal.push(() => {
        this.oneSignal.getUserId((userId: any) => {
          console.log('User ID:', userId);
        });
      });
    }
  }
}