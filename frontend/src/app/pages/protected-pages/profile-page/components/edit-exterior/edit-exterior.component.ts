import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-edit-exterior',
  templateUrl: './edit-exterior.component.html',
  styleUrls: ['./edit-exterior.component.scss'],
})
export class EditExteriorComponent {
  @Input() selectedExterior!: string;
  @Output() exteriorEvent = new EventEmitter<any>();
  displayExteriorModal!: boolean;

  showExteriorModal() {
    this.displayExteriorModal = true;
  }

  updateExterior(selectedExterior: string) {
    this.selectedExterior = selectedExterior;
    this.exteriorEvent.emit(this.selectedExterior);
  }
}
