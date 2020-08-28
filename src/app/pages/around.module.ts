import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AroundComponent } from './around/around/around.component';
import { Routes, RouterModule } from '@angular/router';
import { NannyComponent } from './nanny/nanny/nanny.component';
import { DemoNgZorroAntdModule } from '../ng-zorro-antd.module';

const routes: Routes = [
  {
    path: '',
    component: AroundComponent,
  },
];

@NgModule({
  declarations: [AroundComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DemoNgZorroAntdModule,
  ]
})
export class AroundModule { }
