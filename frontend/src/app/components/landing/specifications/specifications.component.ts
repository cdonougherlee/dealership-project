import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-specifications',
  templateUrl: './specifications.component.html',
  styleUrls: ['./specifications.component.scss'],
})
export class SpecificationsComponent {
  activeState: boolean[] = [true, false, false];
  isSmall: boolean = false;
  performanceSpecs!: any[];
  capacitySpecs!: any[];
  weightSpecs!: any[];
  exteriorSpecs!: any[];

  toggle(index: number) {
    this.activeState[index] = !this.activeState[index];
  }

  constructor(
    private breakpointService: BreakpointObserver,
    private dataService: DataService
  ) {}

  async ngOnInit() {
    this.breakpointService
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((res) => {
        this.isSmall = false;

        if (res.matches) {
          this.isSmall = true;
        }
      });

    this.dataService.getSpecs().then((specs) => {
      this.performanceSpecs = specs.performanceSpecs;
      this.capacitySpecs = specs.capacitySpecs;
      this.weightSpecs = specs.weightSpecs;
      this.exteriorSpecs = specs.exteriorSpecs;
    });
  }
}
