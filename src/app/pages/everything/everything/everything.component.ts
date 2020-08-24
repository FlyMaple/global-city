import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

interface ItemData {
  gender: string;
  name: Name;
  email: string;
}

interface Name {
  title: string;
  first: string;
  last: string;
}



class MyDataSource extends DataSource<ItemData> {
  private length = 100000;
  private pageSize = 10;
  private cachedData = Array.from<ItemData>({ length: this.length });
  private fetchedPages = new Set<number>();
  private dataStream = new BehaviorSubject<ItemData[]>(this.cachedData);
  private subscription = new Subscription();

  constructor(private http: HttpClient) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<ItemData[]> {
    this.subscription.add(
      collectionViewer.viewChange.subscribe(range => {
        const startPage = this.getPageForIndex(range.start);
        const endPage = this.getPageForIndex(range.end - 1);
        for (let i = startPage; i <= endPage; i++) {
          this.fetchPage(i);
        }
      })
    );
    return this.dataStream;
  }

  disconnect(): void {
    this.subscription.unsubscribe();
  }

  private getPageForIndex(index: number): number {
    return Math.floor(index / this.pageSize);
  }

  private fetchPage(page: number): void {
    if (this.fetchedPages.has(page)) {
      return;
    }
    this.fetchedPages.add(page);

    this.http
      .get<{ results: ItemData[] }>(`https://randomuser.me/api/?results=${this.pageSize}&inc=name,gender,email,nat&noinfo`)
      .subscribe(res => {
        this.cachedData.splice(page * this.pageSize, this.pageSize, ...res.results);
        this.dataStream.next(this.cachedData);
      });
  }
}

@Component({
  selector: 'app-everything',
  templateUrl: './everything.component.html',
  styleUrls: ['./everything.component.scss']
})
export class EverythingComponent implements OnInit {
  ds = new MyDataSource(this.http);

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  get categoryPath() {
    return this.route.snapshot.url[0].path;
  }

  ngOnInit(): void {
    
  }

}
