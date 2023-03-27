import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Component } from "@angular/core";
import { PhotoService } from "src/app/core/services/photo.service";
import { Image } from "src/app/core/interfaces/Image";
import {
  NgOptimizedImage,
  CommonModule,
  provideImageKitLoader,
} from "@angular/common";
import { CarouselModule } from "primeng/carousel";

@Component({
  selector: "app-customisation",
  templateUrl: "./customisation.component.html",
  styleUrls: ["./customisation.component.scss"],
  standalone: true,
  imports: [NgOptimizedImage, CommonModule, CarouselModule],
  providers: [provideImageKitLoader("https://ik.imagekit.io/h0s40k5ceq/")],
})
export class CustomisationComponent {
  path!: string;
  images!: Image[];
  isSmall: boolean = false;
  isXSmall: boolean = false;
  srcSet =
    "100w, 200w, 300w, 400w, 500w, 600w, 700w, 800w, 900w, 1000w, 1100w, 1200w";

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
      this.images = res.images;
    });
  }
}
