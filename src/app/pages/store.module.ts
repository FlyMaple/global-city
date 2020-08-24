import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store/store/store.component';
import { DemoNgZorroAntdModule } from '../ng-zorro-antd.module';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: StoreComponent,
  },
];

@NgModule({
  declarations: [StoreComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DemoNgZorroAntdModule,
  ]
})
export class StoreModule { }
