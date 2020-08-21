import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_TW } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { SidnavModule } from 'src/lib/sidnav/sidnav.module';

registerLocaleData(zh);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidnavModule.forRoot([
      {
        title: '社區大廳',
        path: '',
        icon: 'mail',
      },
      {
        title: '社區大小事',
        path: 'everyhing',
        icon: 'mail',
      },
      {
        title: '社區周邊',
        path: 'around',
        icon: 'mail',
      },
      {
        title: '社區買賣&租賃',
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
    ]),
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_TW }],
  bootstrap: [AppComponent],
})
export class AppModule {}
