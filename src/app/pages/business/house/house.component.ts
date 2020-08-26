import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpMethods, ApiService } from 'src/lib/api';

module GetHouse {
  export const url = 'http://localhost:4444/house';
  export const method = HttpMethods.Get;

  export interface ResponseBody {}

  export interface Response {
    body: ResponseBody;
    message: string;
    status: number;
  }
}

enum Provide {
  'electronic_locks' = '電子鎖',
  'system_furniture' = '系統家具',
  'dining_table' = '餐桌',
  'coffee_table' = '茶几',
  'sofa' = '沙發',
  'tv' = '電視',
  'dishwasher' = '洗碗機',
  'refrigerator' = '冰箱',
  'washing_machine' = '洗衣機',
  'heater' = '暖風機',
  'water_heater' = '熱水器',
  'bed' = '床',
  'curtain' = '窗簾',
  'parking_space' = '車位',
  'network' = '網路',
  'the_fourth_station' = '第四台',
}

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss'],
})
export class HouseComponent implements OnInit {
  list$: Observable<any>;

  readonly PROVIDE = Provide;

  constructor(private http: HttpClient, private api: ApiService) {}

  private async initialize(): Promise<void> {
    this.list$ = this.api.request<GetHouse.ResponseBody>(GetHouse);
  }

  ngOnInit(): void {
    this.initialize();
  }
}
