import { Injectable, InjectionToken, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { SIDNAV_MENU_CONFIG, SidnavMenus } from '../sidnav';

export interface UrlSegment {
  path: string;
  title: string;
}

export type UrlSegments = UrlSegment[];

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  constructor(
    @Inject(SIDNAV_MENU_CONFIG)
    private menuConfig: SidnavMenus,
    private route: Router
  ) {}

  // get(): UrlSegments {
  //   const url = this.route.url;
  //   return url.split('/').map((path) => {
  //     this.menuConfig.find((menu) => {})
  //   });
  // }

  aaa() {
  }
}
