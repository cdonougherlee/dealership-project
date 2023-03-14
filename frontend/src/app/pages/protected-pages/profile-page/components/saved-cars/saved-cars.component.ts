import { Component, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { CRUDService } from 'src/app/core/services/crud.service';

@Component({
  selector: 'app-saved-cars',
  templateUrl: './saved-cars.component.html',
  styleUrls: ['./saved-cars.component.scss'],
})
export class SavedCarsComponent {
  errorMsg: String | null = null;
  cars!: any[];

  constructor(private crud: CRUDService) {}

  ngOnInit() {
    this.getCars();
  }

  getCars() {
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
}
