import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { CRUDService } from 'src/app/core/services/crud.service';
import { Router } from '@angular/router';
import { Utils } from 'src/app/core/utils/utils';
import { Car } from 'src/app/core/interfaces/Car';
import { Accessory } from 'src/app/core/interfaces/Accessory';

@Component({
  selector: 'app-configurator-page',
  templateUrl: './configurator-page.component.html',
  styleUrls: ['./configurator-page.component.scss'],
})
export class ConfiguratorPageComponent implements OnInit {
  isSmall: boolean = false;
  isLoggedIn!: boolean;
  selectedAccessories: Accessory[] = [];
  selectedExterior: string = 'Sonic Red';
  selectedTrim: string = 'Black';

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
        this.isSmall = res.matches;
      });

    this.isLoggedIn = this.utils.isLoggedIn();
  }

  updateAccessories(selectedAccessories: Accessory[]) {
    this.selectedAccessories = selectedAccessories;
  }

  updateExterior(selectedExterior: string) {
    this.selectedExterior = selectedExterior;
  }

  updateTrim(selectedTrim: string) {
    this.selectedTrim = selectedTrim;
  }

  onConfiguratorSubmit() {
    this.selectedExterior = this.selectedExterior.replace(/\s/g, '_');
    const reqObject: Car = {
      brand: 'Volvo',
      model: 'S90',
      colour: this.selectedExterior,
      trim: this.selectedTrim,
      options: this.selectedAccessories,
    };

    return this.crud.create(reqObject).subscribe({
      next: () => {},
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        let username = this.utils.getUsername();
        this.router.navigate([`/profile/${username}`]);
      },
    });
  }
}
