import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-edit-trim',
  templateUrl: './edit-trim.component.html',
  styleUrls: ['./edit-trim.component.scss'],
})
export class EditTrimComponent {
  @Input() selectedTrim!: string;
  @Output() trimEvent = new EventEmitter<any>();
  displayTrimModal!: boolean;

  showTrimModal() {
    this.displayTrimModal = true;
  }

  updateTrim(selectedTrim: string) {
    this.selectedTrim = selectedTrim;
    this.trimEvent.emit(this.selectedTrim);
  }
}
