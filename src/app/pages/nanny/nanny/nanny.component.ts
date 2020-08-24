import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nanny',
  templateUrl: './nanny.component.html',
  styleUrls: ['./nanny.component.scss']
})
export class NannyComponent implements OnInit {
  array = new Array(4);

  constructor() { }

  ngOnInit(): void {
  }

}
