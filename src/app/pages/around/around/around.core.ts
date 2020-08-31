import { Marker } from './around.interface';

export module LeafletHelper {
  export function generateMarkerTemplate(marker: Marker) {
    switch (marker.template) {
      case 'normal':
        return generateMarkerNormalTemplate(marker);
    }
  }

  export function generateMarkerNormalTemplate(marker: Marker) {
    return `<div class="marker">
          <div class="title">XXX</div>
          <div class="phone">xxxxxxxxxx</div>
          <div class="address">XXXXXXXXXXXXXXXXXXXXX</div>
          <div class="description"></div>
          <div class="footer">
            <a href="#" class="copy">複製</a>
            <ul class="sources">
              <li>@</li>
              <li>@</li>
              <li>@</li>
              <li>@</li>
            </ul>
          </div>
        </div>`;
  }
}
