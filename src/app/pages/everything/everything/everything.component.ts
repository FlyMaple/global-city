import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
  ActivatedRoute,
  Router,
  NavigationEnd,
  NavigationStart,
} from '@angular/router';
import { RouteService } from 'src/lib/route';

function toArray(_enum: any): { label: string; value: any }[] {
  const arr: { label: string; value: any }[] = [];
  Object.entries<string>(_enum).forEach(([value, label]) => {
    arr.push({ label, value });
  });

  return arr;
}

enum CategoryText {
  other = '其他',
  general = '一般',
  meeting = '會議',
  finance = '財務',
  maintenance = '維修保養',
  activity = '活動',
  statute = '規約',
  system = '系統',
  mgmt_method = '管理辦法',
}

interface ItemData {
  id: number;
  title: string;
  date: number;
  category: string;
  images: string[];
  attach_files: string[];
}

@Component({
  selector: 'app-everything',
  templateUrl: './everything.component.html',
  styleUrls: ['./everything.component.scss'],
})
export class EverythingComponent implements OnInit, OnDestroy {
  // ds = new MyDataSource(this.http);
  list: any[] = [];

  listOfTagOptions = [];

  listOfOption = toArray(CategoryText);

  inputTerm: string;

  loading = false;

  subscriptions: Subscription[] = [];

  nzPage = {
    index: 1,
    size: 5,
  };

  readonly CATEGORY_TEXT = CategoryText;

  constructor(
    private http: HttpClient,
    private activeRoute: ActivatedRoute,
    private route: Router,
    private routeService: RouteService
  ) {
    window['$this'] = this;
  }

  get categoryPath() {
    return this.activeRoute.snapshot.url[0].path;
  }

  get filterList() {
    if (!this.list) {
      return [];
    }

    let result = [];
    if (this.listOfTagOptions.length !== 0) {
      result = this.list.filter((item) =>
        this.listOfTagOptions.includes(item.category)
      );
    } else if (this.categoryPath === 'all') {
      result = this.list;
    } else {
      result = this.list.filter((item) => this.categoryPath === item.category);
    }

    if (this.inputTerm) {
      result = result.filter((item) => item.title.includes(this.inputTerm));
    }

    return result;
  }

  get paginationList() {
    return this.filterList.slice(
      (this.nzPage.index - 1) * this.nzPage.size,
      this.nzPage.index * this.nzPage.size
    );
  }

  private async initialize(): Promise<void> {
    console.warn('initialize.');
    this.loading = true;
    const response = await this.http
      .get<{ body: any[] }>('http://localhost:4444/everything')
      .toPromise();

    this.list = response.body;
    this.loading = false;
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.route.events.subscribe(async (event) => {
        if (event instanceof NavigationStart) {
        } else if (event instanceof NavigationEnd) {
          await this.initialize();
        }
      })
    );

    this.initialize();
  }

  searchInput(event: any): void {}

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
    this.subscriptions = [];
  }
}
