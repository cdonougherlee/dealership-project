import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  async getDealerLocations() {
    const res = await lastValueFrom(
      this.http.get<any>("/Dealership-project/assets/data/volvo-specs.json")
    );
    return res;
  }

  async getSpecs() {
    const res = await lastValueFrom(
      this.http.get<any>("/Dealership-project/assets/data/volvo-specs.json")
    );
    const specs = res.specs;
    return specs;
  }

  async getAccessories() {
    const res = await lastValueFrom(
      this.http.get<any>("/Dealership-project/assets/data/volvo-specs.json")
    );
    return res;
  }
}
