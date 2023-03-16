import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { PhotoService } from 'src/app/core/services/photo.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  images!: any[];
  path!: string;
  isSmall!: boolean;

  responsiveOptions: any[] = [
    // For p-galleria
    {
      breakpoint: '1024px', // Can't use isSmall here as galleria doesn't accept boolean
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '400px',
      numVisible: 2,
    },
  ];

  constructor(
    private breakpointService: BreakpointObserver,
    private photoService: PhotoService
  ) {}

  ngOnInit() {
    this.breakpointService
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((res) => {
        this.isSmall = res.matches;
      });

    this.photoService.getGalleryImages().then((res) => {
      this.path = res.path;
      this.images = res.images;
    });
  }
}
