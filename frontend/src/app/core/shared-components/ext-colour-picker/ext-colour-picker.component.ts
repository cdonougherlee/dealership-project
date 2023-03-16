import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ext-colour-picker',
  templateUrl: './ext-colour-picker.component.html',
  styleUrls: ['./ext-colour-picker.component.scss'],
})
export class ExtColourPickerComponent {
  isSmall: boolean = false;
  isXSmall: boolean = false;
  @Input() selectedExterior!: string;
  @Output() exteriorEvent = new EventEmitter<string>();

  constructor(private breakpointService: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointService
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((res) => {
        this.isXSmall = false;
        this.isSmall = res.breakpoints[Breakpoints.Small];
        if (res.breakpoints[Breakpoints.XSmall]) {
          this.isSmall = this.isXSmall = true;
        }
      });

    this.exteriorEvent.emit(this.selectedExterior);
  }

  updateExterior(selectedExterior: string) {
    this.selectedExterior = selectedExterior;
    this.exteriorEvent.emit(this.selectedExterior);
  }
}
