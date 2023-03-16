import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CRUDService } from 'src/app/core/services/crud.service';

@Component({
  selector: 'app-display-car',
  templateUrl: './display-car.component.html',
  styleUrls: ['./display-car.component.scss'],
})
export class DisplayCarComponent {
  @Input() car!: any;
  @Input() index!: number;
  @Output() refreshEvent = new EventEmitter<any>();
  isSmall: boolean = false;
  isXSmall: boolean = false;
  selectedExterior!: string;
  selectedTrim!: string;
  errorMsg: String | null = null;

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
        this.refreshEvent.emit();
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
        this.refreshEvent.emit();
      },
      error: (error) => {
        this.errorMsg = error;
      },
    });
  }
}
