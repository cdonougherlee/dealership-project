import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Utils } from 'src/app/core/utils/utils';
import { ProfileUpdate } from 'src/app/core/interfaces/ProfileUpdate';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  currentPrefDealer!: string;
  username!: string | null;
  displayModal!: boolean;
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
        this.isSmall = res.matches;
      });

    this.username = this.utils.getUsername();

    this.auth.getProfile(this.username).subscribe({
      next: (res) => {
        this.currentPrefDealer = res.user.prefDealer;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  showModalDialog() {
    this.displayModal = true;
  }

  updateDetails(newDetails: ProfileUpdate) {
    this.username = newDetails.username;
    this.currentPrefDealer = newDetails.prefDealer;
  }
}
