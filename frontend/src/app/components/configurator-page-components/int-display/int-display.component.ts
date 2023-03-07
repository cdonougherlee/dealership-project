import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-int-display',
  templateUrl: './int-display.component.html',
  styleUrls: ['./int-display.component.scss'],
})
export class IntDisplayComponent implements OnInit {
  isSmall: boolean = false;
  isXSmall: boolean = false;

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
