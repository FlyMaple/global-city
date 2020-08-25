import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SidnavMenu, SIDNAV_MENU_CONFIG, SidnavMenus } from '../sidnav';
import { Router, RouteConfigLoadEnd } from '@angular/router';

enum CategoryText {
  other = '其他',
  general = '一般',
  meeting = '會議',
  finance = '財務',
  maintenance = '維修保養',
  activity = '活動',
  statute = '規約',
  system = '系統',
  mgmt_method = '管理辦法',
}

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  constructor(
    @Inject(SIDNAV_MENU_CONFIG) private menuConfig: SidnavMenus,
    private http: HttpClient,
    private route: Router
  ) {
    console.log(menuConfig);
  }

  private getSidnavMenu(path: string): SidnavMenu {
    // only root menu
    return this.menuConfig.find((menu) => menu.path === path);
  }

  async syncMenuConfig(): Promise<SidnavMenu> {
    // query everything
    const response = (
      await this.http
        .get<{ body: any[] }>('http://localhost:4444/everything')
        .toPromise()
    ).body;

    // parse category & generate menu config
    const categorySet = new Set<string>(response.map((item) => item.category));
    const everythingMenu = this.getSidnavMenu('everything');
    const everythingChildren = Array.from(categorySet).map<SidnavMenu>(
      (category) => ({
        title: CategoryText[category],
        path: category,
      })
    );

    if (everythingChildren.length > 0) {
      everythingChildren.unshift({
        title: '全部',
        path: 'all',
      });
    }

    everythingMenu.children = everythingChildren.length
      ? everythingChildren
      : null;

    return everythingMenu;
  }
}
