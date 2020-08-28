import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SidnavMenu, SIDNAV_MENU_CONFIG, SidnavMenus } from '../sidnav';
import { Router, RouteConfigLoadEnd } from '@angular/router';
import { flattenDeep } from 'lodash';

// TODO:
// route service or menu service

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
  menuFullPath = [];

  constructor(
    @Inject(SIDNAV_MENU_CONFIG) private menuConfig: SidnavMenus,
    private http: HttpClient,
    private route: Router
  ) {
    window['$routeService'] = this;
  }

  private updateMenuFullPath() {
    this.menuFullPath = flattenDeep(
      this.menuConfig.map((menu) => {
        if (menu.children == null) {
          return {
            path: `/${menu.path}`,
            title: menu.title,
            url: [
              {
                path: menu.path,
                title: menu.title,
              },
            ],
          };
        }

        return menu.children.map((child) => {
          return {
            path: `/${menu.path}/${child.path}`,
            title: child.title,
            url: [
              {
                path: menu.path,
                title: menu.title,
              },
              {
                path: child.path,
                title: child.title,
              },
            ],
          };
        });
      })
    );
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

    this.updateMenuFullPath();

    return everythingMenu;
  }
}
