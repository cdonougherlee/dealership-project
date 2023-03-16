import { Component, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { CRUDService } from 'src/app/core/services/crud.service';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { Car } from 'src/app/core/interfaces/Car';

@Component({
  selector: 'app-saved-cars',
  templateUrl: './saved-cars.component.html',
  styleUrls: ['./saved-cars.component.scss'],
})
export class SavedCarsComponent implements OnInit {
  cars!: Car[];
  faSliders = faSliders;
  isSmall: boolean = false;

  constructor(
    private crud: CRUDService,
    private breakpointService: BreakpointObserver
  ) {}

  ngOnInit() {
    this.breakpointService
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((res) => {
        this.isSmall = res.matches;
      });

    this.getCars();
  }

  getCars() {
    this.crud.getCars().subscribe({
      next: (res) => {
        this.cars = res.cars;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
