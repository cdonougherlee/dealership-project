import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CRUDService } from 'src/app/core/services/crud.service';
import { Car } from 'src/app/core/interfaces/Car';

@Component({
  selector: 'app-display-car',
  templateUrl: './display-car.component.html',
  styleUrls: ['./display-car.component.scss'],
})
export class DisplayCarComponent {
  @Input() car!: Car;
  @Input() index!: number;
  @Output() refreshEvent = new EventEmitter<string>();
  isSmall: boolean = false;
  isXSmall: boolean = false;
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
        this.isSmall = res.breakpoints[Breakpoints.Small];
        if (res.breakpoints[Breakpoints.XSmall]) {
          this.isXSmall = this.isSmall = true;
        }
      });
  }

  updateExterior(selectedExterior: string) {
    this.selectedExterior = selectedExterior;
  }

  updateTrim(selectedTrim: string) {
    this.selectedTrim = selectedTrim;
  }

  updateCar(index: number, car: Car) {
    const reqObject = {
      brand: car.brand,
      model: car.model,
      colour: this.selectedExterior,
      trim: this.selectedTrim,
      options: car.options,
    };

    return this.crud.updateCar(reqObject, index).subscribe({
      next: () => {
        this.refreshEvent.emit();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  deleteCar(index: number) {
    return this.crud.deleteCar(index).subscribe({
      next: () => {
        this.refreshEvent.emit();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
