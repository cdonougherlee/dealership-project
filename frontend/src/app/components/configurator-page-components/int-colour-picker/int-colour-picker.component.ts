import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-int-colour-picker',
  templateUrl: './int-colour-picker.component.html',
  styleUrls: ['./int-colour-picker.component.scss'],
})
export class IntColourPickerComponent implements OnInit {
  items!: MenuItem[];

  isSmall: boolean = false;

  colour: String = 'orange';

  colourOptions!: MenuItem[];

  constructor(private breakpointService: BreakpointObserver) {}
  ngOnInit() {
    this.breakpointService
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((res) => {
        this.isSmall = false;

        if (res.matches) {
          this.isSmall = true;
        }
      });

    this.items = [
      {
        label: 'Options',
        items: [
          {
            label: 'Update',
            icon: 'pi pi-refresh',
          },
          {
            label: 'Delete',
            icon: 'pi pi-times',
          },
        ],
      },
      {
        label: 'Navigate',
        items: [
          {
            label: 'Angular',
            icon: 'pi pi-external-link',
          },
          {
            label: 'Router',
            icon: 'pi pi-upload',
          },
        ],
      },
    ];
  }
}
