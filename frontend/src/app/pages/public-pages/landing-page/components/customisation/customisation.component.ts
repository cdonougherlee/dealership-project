import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { PhotoService } from 'src/app/core/services/photo.service';

@Component({
  selector: 'app-customisation',
  templateUrl: './customisation.component.html',
  styleUrls: ['./customisation.component.scss'],
})
export class CustomisationComponent {
  path!: string;
  silhouette!: string;
  images!: any[];
  isSmall: boolean = false;
  isXSmall: boolean = false;

  constructor(
    private breakpointService: BreakpointObserver,
    private photoService: PhotoService
  ) {}

  ngOnInit() {
    this.breakpointService
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((res) => {
        this.isSmall = res.breakpoints[Breakpoints.Small];
        this.isXSmall = res.breakpoints[Breakpoints.XSmall];
      });

    this.photoService.getCarouselImages().then((res) => {
      this.path = res.path;
      this.silhouette = res.silhouette;
      this.images = res.images;
    });
  }
}
