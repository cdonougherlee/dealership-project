import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-customisation',
  templateUrl: './customisation.component.html',
  styleUrls: ['./customisation.component.scss'],
})
export class CustomisationComponent {
  path!: String;
  images!: any[];

  isSmall: boolean = false;
  isXSmall: boolean = false;

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

        if (res.breakpoints[Breakpoints.Small]) {
          this.isSmall = true;
        }

        if (res.breakpoints[Breakpoints.XSmall]) {
          this.isSmall = true;
          this.isXSmall = true;
        }
      });

    this.dataService.getCarouselImages().then((res) => {
      this.path = res.path;
      this.images = res.images;
    });
  }
}
