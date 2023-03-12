import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { CRUDService } from 'src/app/core/services/crud.service';
import { Utils } from 'src/app/core/utils/utils';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.scss'],
})
export class ListCarsComponent implements OnInit {
  errorMsg: String | null = null;
  isSmall: boolean = false;
  isXSmall: boolean = false;
  cars!: any[];

  constructor(
    private crud: CRUDService,
    private router: Router,
    private breakpointService: BreakpointObserver,
    private utils: Utils
  ) {
    this.crud.getCars().subscribe({
      next: (res) => {
        this.errorMsg = null;
        this.cars = res.cars;
      },
      error: (error) => {
        this.errorMsg = error;
      },
    });
  }

  ngOnInit() {
    this.breakpointService
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((res) => {
        this.isXSmall = false;
        this.isSmall = res.breakpoints[Breakpoints.Small];

        if (res.breakpoints[Breakpoints.XSmall]) {
          this.isXSmall = this.isSmall = true;
        }
      });
  }

  listCars() {
    return this.crud.getCars().subscribe({
      next: (res) => {
        this.errorMsg = null;
        this.cars = res.cars;
      },
      error: (error) => {
        this.errorMsg = error;
      },
    });
  }

  updateCar(index: number, car: any) {
    const reqObject = {
      brand: car.brand,
      model: car.model,
      colour: 'grey',
      trim: car.trim,
      options: car.options,
    };

    return this.crud.updateCar(reqObject, index).subscribe({
      next: (res) => {
        this.errorMsg = null;
        console.log(res);
      },
      error: (error) => {
        this.errorMsg = error;
      },
    });
  }

  deleteCar(index: number) {
    return this.crud.deleteCar(index).subscribe({
      next: (res) => {
        this.errorMsg = null;
        console.log(res);
      },
      error: (error) => {
        this.errorMsg = error;
      },
    });
  }
}
