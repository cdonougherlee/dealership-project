import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-edit-accessories',
  templateUrl: './edit-accessories.component.html',
  styleUrls: ['./edit-accessories.component.scss'],
})
export class EditAccessoriesComponent {
  displayModal!: boolean;
  @Input() selectedAccessories!: Array<any>;

  showModalDialog() {
    this.displayModal = true;
  }
}
