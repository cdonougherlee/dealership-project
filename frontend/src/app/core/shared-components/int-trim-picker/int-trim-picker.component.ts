import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-int-trim-picker',
  templateUrl: './int-trim-picker.component.html',
  styleUrls: ['./int-trim-picker.component.scss'],
})
export class IntTrimPickerComponent implements OnInit {
  isSmall: boolean = false;
  isXSmall: boolean = false;
  @Input() selectedTrim!: string;
  @Output() trimEvent = new EventEmitter<any>();

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

    this.trimEvent.emit(this.selectedTrim);
  }

  updateTrim(selectedTrim: string) {
    this.selectedTrim = selectedTrim;
    this.trimEvent.emit(this.selectedTrim);
  }
}
