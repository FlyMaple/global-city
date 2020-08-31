import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  ElementRef,
} from '@angular/core';
import * as L from 'leaflet';
import { Markers } from './around.interface';
import { LeafletHelper } from './around.core';



const initMarkers: Markers = [
  {
    template: 'normal',
    latlng: [24.7734186, 121.0083136],
    payload: {
      title: 'XXX',
      phone: '0123456789',
      address: 'xxxxxxxxxxxxxxxxxxxxx',
      description:
        'chunk {pages-around-module} pages-around-module.js, pages-around-module.js.map',
      sources: [
        {
          type: 'facebook',
          url: 'https://goo.gl/maps/pVpXevaYnaRETdrdA',
        },
        {
          type: 'line',
          qrcode: 'https://goo.gl/maps/pVpXevaYnaRETdrdA',
        },
        {
          type: 'google',
          url: 'https://goo.gl/maps/pVpXevaYnaRETdrdA',
        },
        {
          type: 'other',
          url: 'https://goo.gl/maps/pVpXevaYnaRETdrdA',
        },
      ],
    },
  },
  {
    template: 'normal',
    latlng: [24.6863588,120.8412171],
    payload: {
      title: 'XXX',
      phone: '0123456789',
      address: 'xxxxxxxxxxxxxxxxxxxxx',
      description:
        'chunk {pages-around-module} pages-around-module.js, pages-around-module.js.map',
      sources: [
        {
          type: 'facebook',
          url: 'https://goo.gl/maps/pVpXevaYnaRETdrdA',
        },
        {
          type: 'line',
          qrcode: 'https://goo.gl/maps/pVpXevaYnaRETdrdA',
        },
        {
          type: 'google',
          url: 'https://goo.gl/maps/pVpXevaYnaRETdrdA',
        },
        {
          type: 'other',
          url: 'https://goo.gl/maps/pVpXevaYnaRETdrdA',
        },
      ],
    },
  },
];

@Component({
  selector: 'app-around',
  templateUrl: './around.component.html',
  styleUrls: ['./around.component.scss'],
})
export class AroundComponent implements OnInit {
  @ViewChild('asd', { static: true })
  private asd: ElementRef<HTMLDivElement>;

  mymap: L.Map;

  constructor() {
    window['$around'] = this;
  }

  private loadMarker(markers: Markers): void {
    markers.forEach((marker) => {
      L.marker(marker.latlng)
        .addTo(this.mymap)
        .bindPopup(LeafletHelper.generateMarkerTemplate(marker));
    });
  }

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

    this.loadMarker(initMarkers);
  }
}
