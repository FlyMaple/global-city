import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineComponent } from './line/line/line.component';
import { DemoNgZorroAntdModule } from '../ng-zorro-antd.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LineComponent,
  },
];

@NgModule({
  declarations: [LineComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DemoNgZorroAntdModule,
  ]
})
export class LineModule { }
