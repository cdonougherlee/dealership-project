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

  // Logout
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expires');
    localStorage.removeItem('username');
  }

  // Register
  register(data: Object): Observable<any> {
    let url = `${this.baseUri}/register`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }

  // Get Profile
  getProfile(username: any): Observable<any> {
    let url = `${this.baseUri}/profile/${username}`;
    return this.http.get(url).pipe(catchError(this.errorMgmt));
  }

  // Update Profile
  updateProfile(data: Object, username: any): Observable<any> {
    let url = `${this.baseUri}/profile/${username}`;
    return this.http.put(url, data).pipe(catchError(this.errorMgmt));
  }

  // Delete Profile
  deleteProfile(username: any): Observable<any> {
    let url = `${this.baseUri}/profile/${username}`;
    return this.http.delete(url).pipe(catchError(this.errorMgmt));
  }

  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    return throwError(() => {
      if (error.status === 401) {
        return 'You are not authorized to visit this route.  No data is displayed.';
      }
      return error.error.msg;
    });
  }
}
