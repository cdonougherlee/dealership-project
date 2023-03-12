import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent {
  activeState: boolean[] = [true, false, false];
  isSmall: boolean = false;

  toggle(index: number) {
    this.activeState[index] = !this.activeState[index];
  }

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
