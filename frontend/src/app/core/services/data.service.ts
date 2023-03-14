import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  getDealerLocations() {
    return lastValueFrom(
      this.http.get<any>('../../assets/data/dealer-locations.json')
    ).then((res) => {
      return res;
    });
  }

  getSpecs() {
    return lastValueFrom(
      this.http.get<any>('../../assets/data/volvo-specs.json')
    )
      .then((res) => res.specs)
      .then((specs) => {
        return specs;
      });
  }

  async getAccessories() {
    const res = await lastValueFrom(
      this.http.get<any>('../../assets/data/accessories.json')
    );
    return res;
  }

  getGalleryImages() {
    return lastValueFrom(
      this.http.get<any>('../../assets/data/gallery-images.json')
    ).then((res) => {
      return res;
    });
  }

  getCarouselImages() {
    return lastValueFrom(
      this.http.get<any>('../../assets/data/carousel-images.json')
    ).then((res) => {
      return res;
    });
  }

  getConfigExtImages() {
    return lastValueFrom(
      this.http.get<any>('../../assets/data/config-ext-images.json')
    ).then((res) => {
      return res;
    });
  }
  getIntImages() {
    return lastValueFrom(
      this.http.get<any>('../../assets/data/config-ext-images.json')
    ).then((res) => {
      return res;
    });
  }
}
