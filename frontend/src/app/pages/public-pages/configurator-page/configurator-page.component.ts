import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { CRUDService } from 'src/app/core/services/crud.service';
import { Router } from '@angular/router';
import { Utils } from 'src/app/core/utils/utils';

@Component({
  selector: 'app-configurator-page',
  templateUrl: './configurator-page.component.html',
  styleUrls: ['./configurator-page.component.scss'],
})
export class ConfiguratorPageComponent implements OnInit {
  isSmall: boolean = false;
  isLoggedIn!: boolean;
  selectedAccessories: Object[] = [];
  selectedExterior: string = 'orange';
  selectedTrim: string = 'Black';
  errorMsg: String | null = null;

  constructor(
    private breakpointService: BreakpointObserver,
    private crud: CRUDService,
    private router: Router,
    private utils: Utils
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

    this.isLoggedIn = this.utils.isLoggedIn();
  }

  updateAccessories(selectedAccessories: Object[]) {
    this.selectedAccessories = selectedAccessories;
  }

  updateExterior(selectedExterior: string) {
    this.selectedExterior = selectedExterior;
  }

  updateTrim(selectedTrim: string) {
    this.selectedTrim = selectedTrim;
  }

  onConfiguratorSubmit() {
    const reqObject = {
      brand: 'Volvo',
      model: 'S90',
      colour: this.selectedExterior,
      trim: this.selectedTrim,
      options: this.selectedAccessories,
    };

    return this.crud.create(reqObject).subscribe({
      next: () => {
        this.errorMsg = null;
      },
      error: (error) => {
        this.errorMsg = error;
      },
      complete: () => {
        let username = this.utils.getUsername();
        this.router.navigate([`/profile/${username}`]);
      },
    });
  }
}
