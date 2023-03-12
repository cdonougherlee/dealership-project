import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  // Variable intialisation
  isSmall: boolean = false;
  message!: string;

  username!: String | null;

  constructor(
    private http: HttpClient,
    private router: Router,
    private auth: AuthService,
    private breakpointService: BreakpointObserver
  ) {}

  // Execute this HTTP request when the route loads
  ngOnInit() {
    this.username = this.auth.getUsername();

    this.breakpointService
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((res) => {
        this.isSmall = false;

        if (res.matches) {
          this.isSmall = true;
        }
      });
  }
}
