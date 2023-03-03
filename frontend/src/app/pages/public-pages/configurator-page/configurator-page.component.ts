import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configurator-page',
  templateUrl: './configurator-page.component.html',
  styleUrls: ['./configurator-page.component.scss'],
})
export class ConfiguratorPageComponent implements OnInit {
  // Variable intialisation
  isSmall: boolean = false;

  constructor(private breakpointService: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointService
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((res) => {
        this.isSmall = false;

        if (res.matches) {
          this.isSmall = true;
        }
      });
  }
}
