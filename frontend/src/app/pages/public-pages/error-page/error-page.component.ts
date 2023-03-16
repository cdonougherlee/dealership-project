import { Component, OnInit } from '@angular/core';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Utils } from 'src/app/core/utils/utils';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss'],
})
export class ErrorPageComponent implements OnInit {
  faArrowUpRightFromSquare = faArrowUpRightFromSquare;
  username!: String | null;
  loggedIn: boolean = false;

  constructor(private utils: Utils) {}

  ngOnInit() {
    this.loggedIn = this.utils.isLoggedIn();
    this.username = this.utils.getUsername();
  }
}
