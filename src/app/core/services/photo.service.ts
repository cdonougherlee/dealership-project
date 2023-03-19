import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  // async getBaseURL() {
  //   const res = await lastValueFrom(
  //     this.http.get<any>('../../assets/data/base-url.json')
  //   );
  //   return res;
  // }

  async getBackDropImage() {
    const res = await lastValueFrom(
      this.http.get<any>("/Dealership-project/assets/data/volvo-specs.json")
    );
    return res;
  }

  async getGalleryImages() {
    const res = await lastValueFrom(
      this.http.get<any>("/Dealership-project/assets/data/volvo-specs.json")
    );
    return res;
  }

  async getFeaturesImages() {
    const res = await lastValueFrom(
      this.http.get<any>("/Dealership-project/assets/data/volvo-specs.json")
    );
    return res;
  }

  async getCarouselImages() {
    const res = await lastValueFrom(
      this.http.get<any>("/Dealership-project/assets/data/volvo-specs.json")
    );
    return res;
  }

  async getExtImages() {
    const res = await lastValueFrom(
      this.http.get<any>("/Dealership-project/assets/data/volvo-specs.json")
    );
    return res;
  }

  async getIntImages() {
    const res = await lastValueFrom(
      this.http.get<any>("/Dealership-project/assets/data/volvo-specs.json")
    );
    return res;
  }
}
