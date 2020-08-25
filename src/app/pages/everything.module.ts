import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { EverythingComponent } from './everything/everything/everything.component';
import { Routes, RouterModule } from '@angular/router';
import { DemoNgZorroAntdModule } from '../ng-zorro-antd.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouteModule } from 'src/lib/route';

const routes: Routes = [
  {
    path: '**',
    component: EverythingComponent,
  },
];

@NgModule({
  declarations: [EverythingComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    DemoNgZorroAntdModule,
    ScrollingModule,
    DragDropModule,
  ],
})
export class EverythingModule {}
