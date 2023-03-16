import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-edit-exterior',
  templateUrl: './edit-exterior.component.html',
  styleUrls: ['./edit-exterior.component.scss'],
})
export class EditExteriorComponent {
  @Input() selectedExterior!: string;
  @Output() exteriorEvent = new EventEmitter<any>();
  displayExteriorModal!: boolean;

  isSmall: boolean = false;
  isXSmall: boolean = false;
  faPenToSquare = faPenToSquare;

  constructor(private breakpointService: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointService
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((res) => {
        this.isXSmall = false;
        this.isSmall = res.breakpoints[Breakpoints.Small];
        if (res.breakpoints[Breakpoints.XSmall]) {
          this.isXSmall = this.isSmall = true;
        }
      });
  }

  showExteriorModal() {
    this.displayExteriorModal = true;
  }

  updateExterior(selectedExterior: string) {
    this.selectedExterior = selectedExterior;
    this.exteriorEvent.emit(this.selectedExterior);
  }
}
