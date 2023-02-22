import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const idToken = localStorage.getItem('token');

    // If there is a token, clone and set bearer as the authorization header
    if (idToken) {
      const clone = request.clone({
        headers: request.headers.set('Authorization', idToken),
      });

      return next.handle(clone);
    } else {
      return next.handle(request);
    }
  }
}
