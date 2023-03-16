import { Component, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { CRUDService } from 'src/app/core/services/crud.service';
import { faSliders } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-saved-cars',
  templateUrl: './saved-cars.component.html',
  styleUrls: ['./saved-cars.component.scss'],
})
export class SavedCarsComponent implements OnInit {
  errorMsg: String | null = null;
  cars!: any[];
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
        this.isSmall = false;

        if (res.breakpoints[Breakpoints.Small]) {
          this.isSmall = true;
        }
      });

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
