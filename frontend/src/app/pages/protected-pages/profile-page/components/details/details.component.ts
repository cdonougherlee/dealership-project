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

  constructor(
    private auth: AuthService,
    private http: HttpClient,
    private utils: Utils
  ) {}

  ngOnInit() {
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
