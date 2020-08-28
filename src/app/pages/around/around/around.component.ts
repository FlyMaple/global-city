import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-around',
  templateUrl: './around.component.html',
  styleUrls: ['./around.component.scss'],
})
export class AroundComponent implements OnInit {
  mymap: L.Map;

  constructor() {}

  ngOnInit(): void {
    this.mymap = L.map('mapid').setView([24.7734186, 121.0083136], 13);

    L.tileLayer(
      'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          'pk.eyJ1IjoiZmx5bWFwbGUiLCJhIjoiY2tlZHVvbWZsMGxkNTJ4czRoZDN0c3NsbiJ9.a81vh6RxTp6Y6exwXBBAjg',
      }
    ).addTo(this.mymap);
  }
}
