import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

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

  async getConfigExtImages() {
    const res = await lastValueFrom(
      this.http.get<any>('../../assets/photos/config-ext-images.json')
    );
    return res;
  }
  async getIntImages() {
    const res = await lastValueFrom(
      this.http.get<any>('../../assets/photos/config-ext-images.json')
    );
    return res;
  }
}
