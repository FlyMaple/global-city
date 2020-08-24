import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NannyComponent } from './nanny/nanny/nanny.component';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store/store.component';
import { DemoNgZorroAntdModule } from '../ng-zorro-antd.module';

const routes: Routes = [
  {
    path: '',
    component: NannyComponent,
  },
];

@NgModule({
  declarations: [NannyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DemoNgZorroAntdModule,
  ]
})
export class NannyModule { }
