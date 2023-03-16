import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-edit-trim',
  templateUrl: './edit-trim.component.html',
  styleUrls: ['./edit-trim.component.scss'],
})
export class EditTrimComponent {
  @Input() selectedTrim!: string;
  @Output() trimEvent = new EventEmitter<any>();
  displayTrimModal!: boolean;

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

  showTrimModal() {
    this.displayTrimModal = true;
  }

  updateTrim(selectedTrim: string) {
    this.selectedTrim = selectedTrim;
    this.trimEvent.emit(this.selectedTrim);
  }
}
