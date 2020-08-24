import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { EverythingComponent } from './everything/everything/everything.component';
import { Routes, RouterModule } from '@angular/router';
import { DemoNgZorroAntdModule } from '../ng-zorro-antd.module';

const routes: Routes = [
  {
    path: 'all',
    component: EverythingComponent,
  },
  {
    path: 'other',
    component: EverythingComponent,
  },
];

@NgModule({
  declarations: [EverythingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DemoNgZorroAntdModule,
    ScrollingModule,
    DragDropModule,
  ],
})
export class EverythingModule {}
