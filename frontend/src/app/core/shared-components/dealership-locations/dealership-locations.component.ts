import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { DealerLocation } from '../../interfaces/DealerLocation';

@Component({
  selector: 'app-dealership-locations',
  templateUrl: './dealership-locations.component.html',
  styleUrls: ['./dealership-locations.component.scss'],
})
export class DealershipLocationsComponent {
  @Output() prefDealerEvent = new EventEmitter<string>();
  isSmall: boolean = false;
  isXSmall: boolean = false;
  dealerships!: DealerLocation[];
  currentlySelected: DealerLocation = {
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
        this.isSmall = res.matches;
      });

    this.dataService.getDealerLocations().then((data) => {
      this.dealerships = data.locations;
    });
  }

  outputPrefDealer() {
    this.prefDealerEvent.emit(this.currentlySelected.location);
  }
}
