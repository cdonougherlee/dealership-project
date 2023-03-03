import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-ext-color',
  templateUrl: './ext-color.component.html',
  styleUrls: ['./ext-color.component.scss'],
})
export class ExtColorComponent {
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

    this.colourOptions = [
      {
        label: 'Finder',
        icon: 'https://primefaces.org/cdn/primeng/images/dock/finder.svg',
        command: () => {
          this.updateColour('Red');
          console.log(this.colour);
        },
      },
      {
        label: 'App Store',
        icon: 'https://primefaces.org/cdn/primeng/images/dock/appstore.svg',
      },
      {
        label: 'Photos',
        icon: 'https://primefaces.org/cdn/primeng/images/dock/photos.svg',
      },
      {
        label: 'Trash',
        icon: 'https://primefaces.org/cdn/primeng/images/dock/trash.png',
      },
    ];
  }

  updateColour(colour: String) {
    this.colour = colour;
  }
}
