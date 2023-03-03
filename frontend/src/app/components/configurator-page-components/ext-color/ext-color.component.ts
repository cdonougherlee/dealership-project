import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-ext-color',
  templateUrl: './ext-color.component.html',
  styleUrls: ['./ext-color.component.scss'],
})
export class ExtColorComponent {
  isSmall: boolean = false;

  colour: String = 'orange';

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

  update() {
    this.colour = 'red';
  }
}
