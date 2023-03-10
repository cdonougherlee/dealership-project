import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configurator-page',
  templateUrl: './configurator-page.component.html',
  styleUrls: ['./configurator-page.component.scss'],
})
export class ConfiguratorPageComponent implements OnInit {
  // Variable intialisation
  isSmall: boolean = false;

  isLoggedIn!: boolean;

  // Default values
  selectedAccessories: Object[] = [];
  selectedColour: string = 'orange';
  selectedTrim: string = 'black';

  errorMsg: String | null = null;

  constructor(
    private breakpointService: BreakpointObserver,
    private auth: AuthService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.breakpointService
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((res) => {
        this.isSmall = false;

        if (res.matches) {
          this.isSmall = true;
        }
      });

    this.isLoggedIn = this.auth.isLoggedIn();
  }

  updateAccessories(selectedAccessories: Object[]) {
    this.selectedAccessories = selectedAccessories;
  }

  updateColour(selectedColour: string) {
    this.selectedColour = selectedColour;
  }

  updateTrim(selectedTrim: string) {
    this.selectedTrim = selectedTrim;
  }

  onConfiguratorSubmit() {
    const headers = new HttpHeaders({ 'Content-type': 'application/json' });

    const username = this.auth.getUsername();

    const reqObject = {
      brand: 'Volvo',
      model: 'S90',
      colour: this.selectedColour,
      trim: this.selectedTrim,
      options: this.selectedAccessories,
    };

    console.log(reqObject.options);

    this.http
      .post(`http://localhost:3000/${username}/car`, reqObject, {
        headers: headers,
      })
      .subscribe({
        // The response data
        // If successful
        next: (response) => {
          console.log(reqObject);
          console.log(response);

          this.errorMsg = null;
        },
        // If there is an error
        error: (error) => {
          console.log(error);
          console.log(reqObject);

          this.errorMsg = error.error.msg;
        },
        // When observable completes
        complete: () => {
          console.log('done!');
          this.router.navigate([`/profile/${username}`]);
        },
      });
  }
}

// onConfiguratorSubmit() {
//   const username = this.registerForm.value.username;
//   const password = this.registerForm.value.password;
//   const password2 = this.registerForm.value.password2;
//   const prefDealer = this.registerForm.value.prefDealer.location;

//   const headers = new HttpHeaders({ 'Content-type': 'application/json' });

//   const reqObject = {
//     username: username,
//     password: password,
//     password2: password2,
//     prefDealer: prefDealer,
//   };

//   this.http
//     .post('http://localhost:3000/register', reqObject, {
//       headers: headers,
//     })
//     .subscribe({
//       // The response data
//       // If successful
//       next: (response) => {
//         this.authService.setLocalStorage(response);
//         console.log(reqObject);
//         console.log(response);

//         this.errorMsg = null;
//       },
//       // If there is an error
//       error: (error) => {
//         console.log(error);
//         console.log(reqObject);

//         this.errorMsg = error.error.msg;
//       },
//       // When observable completes
//       complete: () => {
//         console.log('done!');
//         this.router.navigate([`/profile/${username}`]);
//       },
//     });
// }
