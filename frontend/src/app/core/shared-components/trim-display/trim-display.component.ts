import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-trim-display',
  templateUrl: './trim-display.component.html',
  styleUrls: ['./trim-display.component.scss'],
})
export class TrimDisplayComponent implements OnInit {
  isSmall: boolean = false;
  isXSmall: boolean = false;
  path!: string;
  images!: [];
  @Input() selectedTrim!: String;

  constructor(
    private breakpointService: BreakpointObserver,
    private dataService: DataService
  ) {}
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

  ngOnChanges(changes: SimpleChanges) {
    this.selectedTrim = changes['selectedTrim'].currentValue;
    this.getImages();
  }

  getImages() {
    this.dataService.getIntImages().then((res) => {
      this.path = res.path + this.selectedTrim + '-';
      this.images = res.images;
    });
  }
}
