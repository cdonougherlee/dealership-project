import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Accessory } from '../../interfaces/Accessory';
import { AccessoryValue } from '../../interfaces/AccessoryValue';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.scss'],
})
export class AccessoriesComponent implements OnInit {
  @Input() edit!: boolean;
  @Input() selectedAccessories: Array<Accessory> = [];
  @Output() accessoriesEvent = new EventEmitter<Array<Accessory>>();
  accessoriesData: Array<Accessory> = [];
  selectedValue!: AccessoryValue;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getAccessories().then((res) => {
      if (!this.edit) {
        this.selectedAccessories = res.default;
      }
      this.accessoriesData = res.options;
      this.accessoriesEvent.emit(this.selectedAccessories);
    });
  }

  updateAccessory(index: number, selectedValue: AccessoryValue) {
    this.selectedAccessories[index].value = selectedValue.value;
    this.accessoriesEvent.emit(this.selectedAccessories);
  }
}
