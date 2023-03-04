import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ext-colour-picker',
  templateUrl: './ext-colour-picker.component.html',
  styleUrls: ['./ext-colour-picker.component.scss'],
})
export class ExtColourPickerComponent {
  isSmall: boolean = false;

  colour: String = 'orange';

  faCircle = faCircle;

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

    // this.colourOptions = [
    //   {
    //     label: 'Finder',
    //     icon: PrimeIcons.DOWNLOAD,
    //     command: () => {
    //       this.updateColour('Red');
    //       console.log(this.colour);
    //     },
    //   },
    //   {
    //     label: 'App Store',
    //     icon: 'https://primefaces.org/cdn/primeng/images/dock/appstore.svg',
    //   },
    //   {
    //     label: 'Photos',
    //     icon: 'https://primefaces.org/cdn/primeng/images/dock/photos.svg',
    //   },
    //   {
    //     label: 'Trash',
    //     icon: 'https://primefaces.org/cdn/primeng/images/dock/trash.png',
    //   },
    // ];
  }

  updateColour(colour: String) {
    this.colour = colour;
  }
}
