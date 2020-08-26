import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpMethods, ApiService } from 'src/lib/api';

module GetParking {
  export const url = 'http://localhost:4444/parking';
  export const method = HttpMethods.Get;

  export interface ResponseBody {}

  export interface Response {
    body: ResponseBody;
    message: string;
    status: number;
  }
}

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.scss'],
})
export class ParkingComponent implements OnInit {
  array = [1, 2, 3, 4];

  list$: Observable<any>;

  constructor(private http: HttpClient, private api: ApiService) {}

  private async initialize(): Promise<void> {
    // this.list$ = this.http
    //   .get<{ body: any[] }>('http://localhost:4444/parking')
    //   .pipe(map((response) => response.body));
    this.list$ = this.api.request<GetParking.ResponseBody>(GetParking);
  }

  ngOnInit(): void {
    this.initialize();
  }
}
