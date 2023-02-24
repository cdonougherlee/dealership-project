import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  isSmall: boolean = false;

  imageString: String = '../../../../assets/showcase/';

  images: any[] = [
    {
      previewImageSrc: `${this.imageString}1080p-architecture.jpg`,
      thumbnailImageSrc: `${this.imageString}1080p-architecture.jpg`,
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
    {
      previewImageSrc: `${this.imageString}1080p-evening-bridge.jpg`,
      thumbnailImageSrc: `${this.imageString}1080p-evening-bridge.jpg`,
      alt: 'Description for Image 2',
      title: 'Title 2',
    },
    {
      previewImageSrc: `${this.imageString}4k-head-on.jpg`,
      thumbnailImageSrc: `${this.imageString}4k-head-on.jpg`,
      alt: 'Description for Image 3',
      title: 'Title 3',
    },
    {
      previewImageSrc: `${this.imageString}1080p-water.jpg`,
      thumbnailImageSrc: `${this.imageString}1080p-water.jpg`,
      alt: 'Description for Image 3',
      title: 'Title 3',
    },
  ];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

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
  }
}
