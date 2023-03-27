import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import {
  NgOptimizedImage,
  CommonModule,
  provideImageKitLoader,
} from "@angular/common";
import { Component, Input, OnInit, SimpleChanges } from "@angular/core";
import { Image } from "../../interfaces/Image";

@Component({
  selector: "app-trim-display",
  templateUrl: "./trim-display.component.html",
  styleUrls: ["./trim-display.component.scss"],
  standalone: true,
  imports: [NgOptimizedImage, CommonModule],
  providers: [provideImageKitLoader("https://ik.imagekit.io/h0s40k5ceq/")],
})
export class TrimDisplayComponent implements OnInit {
  @Input() selectedTrim!: string;
  isSmall: boolean = false;
  isXSmall: boolean = false;
  path!: string;
  images!: Image[];
  srcSet =
    "100w, 200w, 300w, 400w, 500w, 600w, 700w, 800w, 900w, 1000w, 1100w, 1200w";

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

  ngOnChanges(changes: SimpleChanges) {
    this.selectedTrim = changes["selectedTrim"].currentValue;
  }
}
