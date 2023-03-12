import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUri: string = 'http://localhost:3000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}

  // Login
  login(data: Object): Observable<any> {
    let url = `${this.baseUri}/login`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }

  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    return throwError(() => {
      return error.error.msg;
    });
  }
}
