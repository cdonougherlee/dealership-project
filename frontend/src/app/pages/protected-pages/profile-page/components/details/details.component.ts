import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Utils } from 'src/app/core/utils/utils';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  currentPrefDealer!: string;
  username!: string | null;
  displayModal!: boolean;
  errorMsg!: string | null;
  isSmall: boolean = false;

  constructor(
    private auth: AuthService,
    private breakpointService: BreakpointObserver,
    private utils: Utils
  ) {}

  ngOnInit() {
    this.breakpointService
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((res) => {
        this.isSmall = false;

        if (
          res.breakpoints[Breakpoints.Small] ||
          res.breakpoints[Breakpoints.XSmall]
        ) {
          this.isSmall = true;
        }
      });

    this.username = this.utils.getUsername();
    return this.auth.getProfile(this.username).subscribe({
      next: (res) => {
        this.currentPrefDealer = res.user.prefDealer;

        this.errorMsg = null;
      },
      error: (error) => {
        this.errorMsg = error;
        console.log(this.errorMsg);
      },
    });
  }

  showModalDialog() {
    this.displayModal = true;
  }

  updateDetails(newDetails: any) {
    this.username = newDetails.username;
    this.currentPrefDealer = newDetails.prefDealer;
  }
}
