import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-accessories',
  templateUrl: './edit-accessories.component.html',
  styleUrls: ['./edit-accessories.component.scss'],
})
export class EditAccessoriesComponent {
  displayModal!: boolean;

  showModalDialog() {
    this.displayModal = true;
  }
}
