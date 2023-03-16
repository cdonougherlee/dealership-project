import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  async getBaseURL() {
    const res = await lastValueFrom(
      this.http.get<any>('../../assets/data/base-url.json')
    );
    return res;
  }

  async getBackDropImages() {
    const res = await lastValueFrom(
      this.http.get<any>('../../assets/data/backdrop.json')
    );
    return res;
  }

  async getDealerLocations() {
    const res = await lastValueFrom(
      this.http.get<any>('../../assets/data/dealer-locations.json')
    );
    return res;
  }

  async getSpecs() {
    const res = await lastValueFrom(
      this.http.get<any>('../../assets/data/volvo-specs.json')
    );
    const specs = res.specs;
    return specs;
  }

  async getAccessories() {
    const res = await lastValueFrom(
      this.http.get<any>('../../assets/data/accessories.json')
    );
    return res;
  }

  async getGalleryImages() {
    const res = await lastValueFrom(
      this.http.get<any>('../../assets/data/gallery-images.json')
    );
    return res;
  }

  async getCarouselImages() {
    const res = await lastValueFrom(
      this.http.get<any>('../../assets/data/carousel-images.json')
    );
    return res;
  }

  async getConfigExtImages() {
    const res = await lastValueFrom(
      this.http.get<any>('../../assets/data/config-ext-images.json')
    );
    return res;
  }
  async getIntImages() {
    const res = await lastValueFrom(
      this.http.get<any>('../../assets/data/config-ext-images.json')
    );
    return res;
  }
}
