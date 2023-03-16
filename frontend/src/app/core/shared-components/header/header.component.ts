import { Component, Input, OnInit } from '@angular/core';
import { Utils } from '../../utils/utils';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { faIdBadge } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() protected!: boolean;
  username!: string | null;
  loggedIn: boolean = false;
  faSliders = faSliders;
  faIdBadge = faIdBadge;
  faUser = faUser;
  isSmall: boolean = false;
  isXSmall: boolean = false;

  constructor(
    private breakpointService: BreakpointObserver,
    private utils: Utils
  ) {}

  ngOnInit(): void {
    this.breakpointService
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((res) => {
        this.isXSmall = false;
        this.isSmall = res.breakpoints[Breakpoints.Small];
        if (res.breakpoints[Breakpoints.XSmall]) {
          this.isXSmall = this.isSmall = true;
        }
      });

    this.loggedIn = this.utils.isLoggedIn();
    this.username = this.utils.getUsername();
  }
}
