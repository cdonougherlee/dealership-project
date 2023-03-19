import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Accessory } from '../../interfaces/Accessory';
import { AccessoryValue } from '../../interfaces/AccessoryValue';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

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
  isSmall!: boolean;

  constructor(
    private dataService: DataService,
    private breakpointService: BreakpointObserver
  ) {}

  ngOnInit() {
    this.breakpointService
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe((res) => {
        this.isSmall = res.matches;
      });

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
