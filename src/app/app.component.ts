import { Component, Inject } from '@angular/core';
import { SIDNAV_MENU_CONFIG } from 'src/lib/sidnav';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isCollapsed = false;

  constructor(@Inject(SIDNAV_MENU_CONFIG) public menuConfig) {
    console.log(menuConfig);
  }
}
