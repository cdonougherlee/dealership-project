import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Image } from '../../interfaces/Image';

@Component({
  selector: 'app-trim-display',
  templateUrl: './trim-display.component.html',
  styleUrls: ['./trim-display.component.scss'],
})
export class TrimDisplayComponent implements OnInit {
  isSmall: boolean = false;
  isXSmall: boolean = false;
  path!: string;
  images!: Image[];
  @Input() selectedTrim!: string;

  constructor(private breakpointService: BreakpointObserver) {}
  ngOnInit() {
    this.breakpointService
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((res) => {
        this.isSmall = res.breakpoints[Breakpoints.Small];
        if (res.breakpoints[Breakpoints.XSmall]) {
          this.isXSmall = this.isSmall = true;
        }
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.selectedTrim = changes['selectedTrim'].currentValue;
  }
}
