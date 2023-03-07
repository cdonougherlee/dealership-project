import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.scss'],
})
export class AccessoriesComponent implements OnInit {
  isSmall: boolean = false;
  isXSmall: boolean = false;

  selectedAccessories: any = [];

  accessories = [
    {
      name: 'Audio',
      description: 'Our premium audio systems',
      base: '7 speaker surround system',
      choices: [
        { choice: '7 speaker surround system' },
        { choice: '12 speaker surround system' },
      ],
    },
    {
      name: 'Roof',
      description: 'Enhance the utility of your S90',
      base: 'None',
      choices: [
        { choice: 'Bicycle carrier' },
        { choice: 'Retractable ski carrier' },
        { choice: '85L roof box' },
      ],
    },
    {
      name: 'Floor mats',
      description: 'For convenience of cleaning',
      base: 'Carpet',
      choices: [
        { choice: 'Carpet' },
        { choice: 'Rubber - front only' },
        { choice: 'Rubber - front and rear' },
      ],
    },
  ];

  constructor(private breakpointService: BreakpointObserver) {}

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
  }

  hi() {
    console.log(this.selectedAccessories);
  }
}
