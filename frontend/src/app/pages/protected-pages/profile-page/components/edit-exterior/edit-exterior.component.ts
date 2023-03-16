import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-edit-exterior',
  templateUrl: './edit-exterior.component.html',
  styleUrls: ['./edit-exterior.component.scss'],
})
export class EditExteriorComponent {
  @Input() selectedExterior!: string;
  @Output() exteriorEvent = new EventEmitter<string>();
  displayExteriorModal!: boolean;
  faPenToSquare = faPenToSquare;

  constructor() {}

  ngOnInit() {}

  showExteriorModal() {
    this.displayExteriorModal = true;
  }

  updateExterior(selectedExterior: string) {
    this.selectedExterior = selectedExterior;
    this.exteriorEvent.emit(this.selectedExterior);
  }
}
