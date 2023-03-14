import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-edit-accessories',
  templateUrl: './edit-accessories.component.html',
  styleUrls: ['./edit-accessories.component.scss'],
})
export class EditAccessoriesComponent {
  @Input() selectedAccessories!: Array<any>;
  displayAccessoriesModal!: boolean;

  showAcessoriesModal() {
    this.displayAccessoriesModal = true;
  }
}
