import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-int-trim-picker',
  templateUrl: './int-trim-picker.component.html',
  styleUrls: ['./int-trim-picker.component.scss'],
})
export class IntTrimPickerComponent implements OnInit {
  isSmall: boolean = false;
  isXSmall: boolean = false;

  colour: String = 'Black';

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

  updateColour(colour: String) {
    this.colour = colour;
  }
}
