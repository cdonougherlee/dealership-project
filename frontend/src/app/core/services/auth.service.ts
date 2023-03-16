import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { RegisterObject } from '../interfaces/RegisterObject';
import { LoginObject } from '../interfaces/LoginObject';
import { ProfileUpdate } from '../interfaces/ProfileUpdate';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUri: string = 'http://localhost:3000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}

  // Login
  login(data: LoginObject): Observable<any> {
    let url = `${this.baseUri}/login`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }

  // Logout
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('expires');
    localStorage.removeItem('username');
  }

  // Register
  register(data: RegisterObject): Observable<any> {
    let url = `${this.baseUri}/register`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }

  // Get Profile
  getProfile(username: string | null): Observable<any> {
    let url = `${this.baseUri}/profile/${username}`;
    return this.http.get(url).pipe(catchError(this.errorMgmt));
  }

  // Update Profile
  updateProfile(data: ProfileUpdate, username: string): Observable<any> {
    let url = `${this.baseUri}/profile/${username}`;
    return this.http.put(url, data).pipe(catchError(this.errorMgmt));
  }

  // Delete Profile
  deleteProfile(username: string | null): Observable<any> {
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
