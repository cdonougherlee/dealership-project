import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  constructor() {}

  private username!: String | null;
  private subject = new Subject<any>();

  updateUsername(username: String | null) {
    this.username = username;
    this.subject.next(this.username);
  }

  onLogin(): Observable<any> {
    return this.subject.asObservable();
  }
}
