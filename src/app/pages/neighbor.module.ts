import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeighborComponent } from './neighbor/neighbor/neighbor.component';
import { Routes, RouterModule } from '@angular/router';
import { DemoNgZorroAntdModule } from '../ng-zorro-antd.module';

const routes: Routes = [
  {
    path: '',
    component: NeighborComponent,
  },
];

@NgModule({
  declarations: [NeighborComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DemoNgZorroAntdModule,
  ]
})
export class NeighborModule { }
