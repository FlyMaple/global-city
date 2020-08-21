import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SidnavMenu {
  title: string;
  path?: string;
  icon?: string;
  children?: SidnavMenu[];
}

export type SidnavMenus = SidnavMenu[];

export const SIDNAV_MENU_CONFIG = new InjectionToken<SidnavMenus>(
  'Sidnav menu config'
);

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class SidnavModule {
  static forRoot(menus: SidnavMenus): ModuleWithProviders<SidnavModule> {
    return {
      ngModule: SidnavModule,
      providers: [
        {
          provide: SIDNAV_MENU_CONFIG,
          useValue: menus,
        },
      ],
    };
  }
}
