import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_TW } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { SidnavModule } from 'src/lib/sidnav/sidnav.module';
import { RouteModule } from 'src/lib/route';
import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';

registerLocaleData(zh);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidnavModule.forRoot([
      {
        title: '社區大廳',
        path: 'lobby',
        icon: 'mail',
      },
      {
        title: '社區大小事',
        path: 'everything',
        icon: 'mail',
      },
      {
        title: '社區周邊',
        path: 'around',
        icon: 'mail',
      },
      {
        title: '社區買賣&租賃',
        path: 'business',
        icon: 'mail',
        children: [
          {
            title: '房子',
            path: 'house',
          },
          {
            title: '車位',
            path: 'parking',
          },
          {
            title: '跳蚤',
            path: 'market',
          },
        ],
      },
      {
        title: '社區媽媽',
        path: 'mother',
        icon: 'mail',
      },
      {
        title: '社區保母',
        path: 'nanny',
        icon: 'mail',
      },
      {
        title: '社區廠商',
        path: 'store',
        icon: 'mail',
      },
      {
        title: '社區光廊',
        path: 'view',
        icon: 'mail',
      },
      {
        title: '社區 Line 群',
        path: 'line',
        icon: 'mail',
      },
      {
        title: '社區吹水',
        path: 'chat',
        icon: 'mail',
      },
      {
        title: '社區未知',
        path: 'unknown',
        icon: 'mail',
      },
      {
        title: '社區住戶',
        path: 'neighbor',
        icon: 'mail',
      },
      {
        title: '聯絡我們',
        path: 'contact-us',
        icon: 'mail',
      },
    ]),
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoNgZorroAntdModule,
    ScrollingModule,
    DragDropModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_TW }],
  bootstrap: [AppComponent],
})
export class AppModule {}
