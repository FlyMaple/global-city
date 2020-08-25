import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnknownComponent } from './unknown/unknown/unknown.component';
import { Routes, RouterModule } from '@angular/router';
import { DemoNgZorroAntdModule } from '../ng-zorro-antd.module';

const routes: Routes = [
  {
    path: '',
    component: UnknownComponent,
  },
];

@NgModule({
  declarations: [UnknownComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DemoNgZorroAntdModule,
  ]
})
export class UnknownModule { }
