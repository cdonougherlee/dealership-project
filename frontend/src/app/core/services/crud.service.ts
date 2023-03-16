import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Utils } from '../utils/utils';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Car } from '../interfaces/Car';

@Injectable({
  providedIn: 'root',
})
export class CRUDService {
  baseUri: string = 'http://localhost:3000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  username!: string | null;

  constructor(private http: HttpClient, private utils: Utils) {
    this.username = utils.getUsername();
  }

  // Create car
  create(data: Car): Observable<any> {
    let url = `${this.baseUri}/${this.username}/car`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }

  // // Read
  // viewCar(data: Car, id: string): Observable<any> {
  //   let url = `${this.baseUri}/${this.username}/car/${id}`;
  //   return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  // }

  // Read cars
  getCars(): Observable<any> {
    let url = `${this.baseUri}/${this.username}/car`;
    return this.http.get(url).pipe(catchError(this.errorMgmt));
  }

  // Update car
  updateCar(data: Car, i: number): Observable<any> {
    let url = `${this.baseUri}/${this.username}/car/${i}`;
    return this.http.put(url, data).pipe(catchError(this.errorMgmt));
  }

  // Delete car
  deleteCar(i: number): Observable<any> {
    let url = `${this.baseUri}/${this.username}/car/${i}`;
    return this.http.delete(url).pipe(catchError(this.errorMgmt));
  }

  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    return throwError(() => {
      return error.error.msg;
    });
  }
}
