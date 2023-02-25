import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  getSpecs() {
    return lastValueFrom(
      this.http.get<any>('../../assets/data/volvo-specs.json')
    )
      .then((res) => res.specs)
      .then((specs) => {
        return specs;
      });
  }
}
