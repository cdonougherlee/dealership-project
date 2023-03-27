import { Component } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import {
  NgOptimizedImage,
  CommonModule,
  provideImageKitLoader,
} from "@angular/common";
import { AccordionModule } from "primeng/accordion";

@Component({
  selector: "app-features",
  templateUrl: "./features.component.html",
  styleUrls: ["./features.component.scss"],
  standalone: true,
  imports: [NgOptimizedImage, CommonModule, AccordionModule],
  providers: [provideImageKitLoader("https://ik.imagekit.io/h0s40k5ceq/")],
})
export class FeaturesComponent {
  isSmall: boolean = false;
  srcSet =
    "100w, 200w, 300w, 400w, 500w, 600w, 700w, 800w, 900w, 1000w, 1100w, 1200w";

  constructor(private breakpointService: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointService
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((res) => {
        this.isSmall = res.matches;
      });
  }
}
