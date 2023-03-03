import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-ext-color',
  templateUrl: './ext-color.component.html',
  styleUrls: ['./ext-color.component.scss'],
})
export class ExtColorComponent {
  images!: any[];
  path!: String;

  isSmall: boolean = false;

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px', // Can't use isSmall here as that is type boolean
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '400px',
      numVisible: 2,
    },
  ];

  constructor(
    private breakpointService: BreakpointObserver,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.breakpointService
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((res) => {
        this.isSmall = false;

        if (res.matches) {
          this.isSmall = true;
        }
      });

    this.dataService.getConfigExtImages().then((res) => {
      this.path = res.path;
      this.images = res.images;
    });
  }
}
