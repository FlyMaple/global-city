export interface Marker {
  template: 'normal';
  latlng: [number, number];
  payload: NormalMarkerTemplatePayload;
}

export type Markers = Marker[];

export interface NormalMarkerTemplatePayload {
  title: string;
  phone: string;
  address: string;
  description: string;
  sources: {
    type: 'facebook' | 'line' | 'google' | 'other';
    url?: string;
    qrcode?: string;
  }[];
}
