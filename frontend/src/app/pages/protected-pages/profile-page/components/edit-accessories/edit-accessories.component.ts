import { Component, Input, OnInit } from '@angular/core';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { Accessory } from 'src/app/core/interfaces/Accessory';

@Component({
  selector: 'app-edit-accessories',
  templateUrl: './edit-accessories.component.html',
  styleUrls: ['./edit-accessories.component.scss'],
})
export class EditAccessoriesComponent implements OnInit {
  @Input() selectedAccessories!: Accessory[];
  displayAccessoriesModal!: boolean;
  isSmall: boolean = false;
  isXSmall: boolean = false;
  faPenToSquare = faPenToSquare;

  constructor() {}

  ngOnInit() {}

  showAcessoriesModal() {
    this.displayAccessoriesModal = true;
  }
}
