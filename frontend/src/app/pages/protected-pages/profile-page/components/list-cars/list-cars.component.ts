import { Component, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { CRUDService } from 'src/app/core/services/crud.service';

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
  selectedExterior!: string;
  selectedTrim!: string;

  constructor(
    private crud: CRUDService,
    private breakpointService: BreakpointObserver
  ) {}

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

  updateExterior(selectedExterior: any) {
    this.selectedExterior = selectedExterior;
  }

  updateTrim(selectedTrim: any) {
    this.selectedTrim = selectedTrim;
  }

  updateCar(index: number, car: any) {
    const reqObject = {
      brand: car.brand,
      model: car.model,
      colour: this.selectedExterior,
      trim: this.selectedTrim,
      options: car.options,
    };
    return this.crud.updateCar(reqObject, index).subscribe({
      next: () => {
        this.errorMsg = null;
      },
      error: (error) => {
        this.errorMsg = error;
      },
    });
  }

  deleteCar(index: number) {
    return this.crud.deleteCar(index).subscribe({
      next: () => {
        this.errorMsg = null;
      },
      error: (error) => {
        this.errorMsg = error;
      },
    });
  }
}
