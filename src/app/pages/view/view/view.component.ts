import { Component, OnInit } from '@angular/core';
import { GalleryItem, Gallery, ImageItem } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

// https://stackblitz.com/edit/ngx-gallery?file=src%2Fstyles.scss
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  galleryId = 'myLightbox';
  items: GalleryItem[] = [
    new ImageItem({
      src: 'https://preview.ibb.co/jrsA6R/img12.jpg',
      thumb: 'https://preview.ibb.co/jrsA6R/img12.jpg',
    }),
    new ImageItem({
      src: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
      thumb: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
    }),
    new ImageItem({
      src: 'https://preview.ibb.co/mwsA6R/img7.jpg',
      thumb: 'https://preview.ibb.co/mwsA6R/img7.jpg',
    }),
    new ImageItem({
      src: 'https://preview.ibb.co/kZGsLm/img8.jpg',
      thumb: 'https://preview.ibb.co/kZGsLm/img8.jpg',
    }),
  ];

  constructor(public gallery: Gallery, private lightbox: Lightbox) {}

  ngOnInit(): void {
    // Load items into gallery
    const galleryRef = this.gallery.ref(this.galleryId);
    galleryRef.load(this.items);
  }

  openInFullScreen(index: number) {
    this.lightbox.open(index, this.galleryId, {
      panelClass: 'fullscreen',
    });
  }
}
