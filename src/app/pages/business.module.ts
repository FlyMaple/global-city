import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseComponent } from './business/house/house.component';
import { MarketComponent } from './business/market/market.component';
import { Routes, RouterModule } from '@angular/router';
import { ParkingComponent } from './business/parking/parking.component';
import { DemoNgZorroAntdModule } from '../ng-zorro-antd.module';

const routes: Routes = [
  {
    path: 'house',
    component: HouseComponent,
  },
  {
    path: 'parking',
    component: ParkingComponent,
  },
  {
    path: 'market',
    component: MarketComponent,
  },
];

@NgModule({
  declarations: [HouseComponent, ParkingComponent, MarketComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DemoNgZorroAntdModule,
  ]
})
export class BusinessModule { }
