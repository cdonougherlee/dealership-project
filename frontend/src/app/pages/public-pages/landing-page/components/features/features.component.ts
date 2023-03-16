import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { PhotoService } from 'src/app/core/services/photo.service';
import { Image } from 'src/app/core/interfaces/Image';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent {
  isSmall: boolean = false;
  path!: string;
  images!: Image[];

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

    this.photoService.getFeaturesImages().then((res) => {
      this.path = res.path;
      this.images = res.images;
    });
  }
}
