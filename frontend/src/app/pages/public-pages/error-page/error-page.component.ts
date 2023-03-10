import { Component, OnInit } from '@angular/core';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss'],
})
export class ErrorPageComponent implements OnInit {
  faArrowUpRightFromSquare = faArrowUpRightFromSquare;

  username!: String | null;

  loggedIn: boolean = false;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.loggedIn = this.auth.isLoggedIn();
    this.username = this.auth.getUsername();
  }
}
