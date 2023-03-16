import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-edit-accessories',
  templateUrl: './edit-accessories.component.html',
  styleUrls: ['./edit-accessories.component.scss'],
})
export class EditAccessoriesComponent implements OnInit {
  @Input() selectedAccessories!: Array<any>;
  displayAccessoriesModal!: boolean;
  isSmall: boolean = false;
  isXSmall: boolean = false;
  faPenToSquare = faPenToSquare;

  constructor(private breakpointService: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointService
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((res) => {
        this.isXSmall = false;
        this.isSmall = res.breakpoints[Breakpoints.Small];
        if (res.breakpoints[Breakpoints.XSmall]) {
          this.isXSmall = this.isSmall = true;
        }
      });
  }

  showAcessoriesModal() {
    this.displayAccessoriesModal = true;
  }
}
