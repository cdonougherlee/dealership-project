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
  @Output() trimEvent = new EventEmitter<string>();

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

    this.trimEvent.emit(this.selectedTrim);
  }

  updateTrim(selectedTrim: string) {
    this.selectedTrim = selectedTrim;
    this.trimEvent.emit(this.selectedTrim);
  }
}
