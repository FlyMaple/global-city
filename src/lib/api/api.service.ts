import { Injectable } from '@angular/core';
import { Observable, forkJoin, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { mergeMap, map } from 'rxjs/operators';

export enum HttpMethods {
  Get = 'GET',
}

export interface ApiRequest {
  url: string;
  method: HttpMethods;
  body?: any;
  params?: { [param: string]: string };
}

export interface ApiResponse<R> {
  body: R;
  message: string;
  status: number;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private httpRequest<R>(req: ApiRequest): Observable<R> {
    return this.http
      .request<ApiResponse<R>>(req.method, req.url, {
        body: req.body,
        params: req.params,
        observe: 'response',
        responseType: 'json',
        withCredentials: true,
      })
      .pipe(map((response) => response.body.body));
  }

  request<R>(req: ApiRequest): Observable<R> {
    return this.httpRequest<R>(req);
  }

  // query<T, R>(requests: ApiRequest[]): any {
  //   return from(requests.map((req) => this.http.request(req.method, req.url, {
  //     body: req.body,
  //     params: req.params,
  //     observe: 'response',
  //     responseType: 'json',
  //     withCredentials: true,
  //   }))).pipe(mergeMap((response) => {
  //     debugger
  //     return response;
  //   }));

  //     //   request(method: string, url: string, options: {
  //     //     body?: any;
  //     //     headers?: HttpHeaders | {
  //     //         [header: string]: string | string[];
  //     //     };
  //     //     observe?: 'body';
  //     //     params?: HttpParams | {
  //     //         [param: string]: string | string[];
  //     //     };
  //     //     reportProgress?: boolean;
  //     //     responseType: 'arraybuffer';
  //     //     withCredentials?: boolean;
  //     // }): Observable<ArrayBuffer>;
  //   });

  //   return null;
  // }
}
