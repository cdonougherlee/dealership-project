import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ext-colour-picker',
  templateUrl: './ext-colour-picker.component.html',
  styleUrls: ['./ext-colour-picker.component.scss'],
})
export class ExtColourPickerComponent {
  isSmall: boolean = false;
  isXSmall: boolean = false;

  colour: String = 'orange';

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
