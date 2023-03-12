import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dealership-input',
  templateUrl: './dealership-input.component.html',
  styleUrls: ['./dealership-input.component.scss'],
})
export class DealershipInputComponent {
  @Output() prefDealerEvent = new EventEmitter<any>();

  outputPrefDealer() {
    this.prefDealerEvent.emit(this.currentlySelected.location);
  }

  isSmall: boolean = false;

  isXSmall: boolean = false;

  dealerships!: Object[];

  currentlySelected = {
    location: 'Greenlane',
    coordinates: '-36.893870, 174.799226',
  };

  constructor(
    private breakpointService: BreakpointObserver,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.breakpointService
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((res) => {
        this.isSmall = false;
        this.isXSmall = false;

        this.isSmall = res.breakpoints[Breakpoints.Small];

        if (res.breakpoints[Breakpoints.XSmall]) {
          this.isXSmall = this.isSmall = true;
        }
      });

    this.dataService.getDealerLocations().then((data) => {
      this.dealerships = data.locations;
    });
  }
}
