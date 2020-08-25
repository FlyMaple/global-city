import { Component, Inject, OnInit } from '@angular/core';
import { SIDNAV_MENU_CONFIG } from 'src/lib/sidnav';
import { RouteService } from 'src/lib/route';
import { RouteConfigLoadEnd, Router, Route, Routes } from '@angular/router';
import { EverythingComponent } from './pages/everything/everything/everything.component';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isCollapsed = false;

  constructor(
    @Inject(SIDNAV_MENU_CONFIG) public menuConfig,
    private routeService: RouteService,
    private route: Router
  ) {}

  async ngOnInit(): Promise<void> {
    await this.routeService.syncMenuConfig();
  }
}
