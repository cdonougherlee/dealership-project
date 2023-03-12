import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.scss'],
})
export class AccessoriesComponent implements OnInit {
  // Variable initialisation
  @Output() accessoriesEvent = new EventEmitter<any>();

  selectedAccessories: Array<Object> = [];

  // Screen responsive handling
  isSmall: boolean = false;
  isXSmall: boolean = false;

  outputSelectedAccessories() {
    this.accessoriesEvent.emit(this.selectedAccessories);
  }

  accessories = [
    {
      index: 0,
      name: 'Audio',
      description: 'Our premium audio systems',
      base: '7 speaker surround system',
      values: [
        { value: '7 speaker surround system' },
        { value: '12 speaker surround system' },
      ],
    },
    {
      index: 1,
      name: 'Roof',
      description: 'Enhance the utility of your S90',
      base: 'None',
      values: [
        { value: 'Bicycle carrier' },
        { value: 'Retractable ski carrier' },
        { value: '85L roof box' },
      ],
    },
    {
      index: 2,

      name: 'FloorMats',
      description: 'For convenience of cleaning',
      base: 'Carpet',
      values: [
        { value: 'Carpet' },
        { value: 'Rubber - front only' },
        { value: 'Rubber - front and rear' },
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
}
