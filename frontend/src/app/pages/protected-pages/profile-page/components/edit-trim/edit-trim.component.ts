import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-edit-trim',
  templateUrl: './edit-trim.component.html',
  styleUrls: ['./edit-trim.component.scss'],
})
export class EditTrimComponent {
  @Input() selectedTrim!: string;
  @Output() trimEvent = new EventEmitter<string>();
  displayTrimModal!: boolean;
  isSmall: boolean = false;
  isXSmall: boolean = false;
  faPenToSquare = faPenToSquare;

  constructor() {}

  ngOnInit() {}

  showTrimModal() {
    this.displayTrimModal = true;
  }

  updateTrim(selectedTrim: string) {
    this.selectedTrim = selectedTrim;
    this.trimEvent.emit(this.selectedTrim);
  }
}
