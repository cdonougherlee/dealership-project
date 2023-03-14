import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.scss'],
})
export class AccessoriesComponent implements OnInit {
  @Input() edit!: boolean;
  @Input() selectedAccessories: Array<any> = [];
  @Output() accessoriesEvent = new EventEmitter<any>();
  accessoriesData: Array<Object> = [];
  selectedValue!: any;
  isSmall: boolean = false;
  isXSmall: boolean = false;

  constructor(
    private breakpointService: BreakpointObserver,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.breakpointService
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((res) => {
        this.isSmall = false;
        this.isXSmall = false;

        if (res.breakpoints[Breakpoints.Small]) {
          this.isSmall = true;
        }

        if (res.breakpoints[Breakpoints.XSmall]) {
          this.isSmall = true;
          this.isXSmall = true;
        }
      });

    this.dataService.getAccessories().then((res) => {
      if (!this.edit) {
        this.selectedAccessories = res.default;
      }
      this.accessoriesData = res.options;
      this.accessoriesEvent.emit(this.selectedAccessories);
    });
  }

  updateAccessory(index: any, selectedValue: any) {
    this.selectedAccessories[index].value = selectedValue.value;
    this.accessoriesEvent.emit(this.selectedAccessories);
  }
}
