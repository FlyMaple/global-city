import { Component, Inject, OnInit } from '@angular/core';
import { SIDNAV_MENU_CONFIG } from 'src/lib/sidnav';
import { RouteService } from 'src/lib/route';
import {
  RouteConfigLoadEnd,
  Router,
  Route,
  Routes,
  NavigationStart,
  NavigationEnd,
} from '@angular/router';
import { EverythingComponent } from './pages/everything/everything/everything.component';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isCollapsed = false;

  breadcrumbs = [];

  constructor(
    @Inject(SIDNAV_MENU_CONFIG) public menuConfig,
    private routeService: RouteService,
    private route: Router
  ) {}

  private parseBreadcrumbs() {
    const url = this.route.url;

    if (url === '/') {
      return [];
    }

    let link = '';
    const menuFullPath = this.routeService.menuFullPath;

    if (menuFullPath.length) {
      return menuFullPath
        .find((menu) => menu.path === url)
        .url.map((segment) => {
          link += `/${segment.path}`;

          return {
            title: segment.title,
            link,
          };
        });
    }
  }

  async ngOnInit(): Promise<void> {
    this.route.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.breadcrumbs = this.parseBreadcrumbs();
      }
    });

    await this.routeService.syncMenuConfig();

    this.breadcrumbs = this.parseBreadcrumbs();
  }
}
