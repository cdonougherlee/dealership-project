import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { DataService } from 'src/app/core/services/data.service';
import { Spec } from 'src/app/core/interfaces/Spec';

@Component({
  selector: 'app-specifications',
  templateUrl: './specifications.component.html',
  styleUrls: ['./specifications.component.scss'],
})
export class SpecificationsComponent {
  isSmall: boolean = false;
  performanceSpecs!: Spec[];
  capacitySpecs!: Spec[];
  weightSpecs!: Spec[];
  exteriorSpecs!: Spec[];

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

    this.dataService.getSpecs().then((specs) => {
      this.performanceSpecs = specs.performanceSpecs;
      this.capacitySpecs = specs.capacitySpecs;
      this.weightSpecs = specs.weightSpecs;
      this.exteriorSpecs = specs.exteriorSpecs;
    });
  }
}
