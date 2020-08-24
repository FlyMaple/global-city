import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view/view.component';
import { Routes, RouterModule } from '@angular/router';
import { DemoNgZorroAntdModule } from '../ng-zorro-antd.module';
import { GalleryModule, GALLERY_CONFIG } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';

const routes: Routes = [
  {
    path: '',
    component: ViewComponent,
  },
];

@NgModule({
  declarations: [ViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DemoNgZorroAntdModule,
    GalleryModule,
    LightboxModule
  ],
  providers: [
    {
      provide: GALLERY_CONFIG,
      useValue: {
        dots: true,
        imageSize: 'cover'
      }
    }
  ]
})
export class ViewModule {}
