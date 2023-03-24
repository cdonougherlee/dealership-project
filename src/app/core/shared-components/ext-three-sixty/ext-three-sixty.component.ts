import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Component, Input, SimpleChanges } from "@angular/core";
import { PhotoService } from "../../services/photo.service";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { Image } from "../../interfaces/Image";

@Component({
  selector: "app-ext-three-sixty",
  templateUrl: "./ext-three-sixty.component.html",
  styleUrls: ["./ext-three-sixty.component.scss"],
})
export class ExtThreeSixtyComponent {
  @Input() selectedExterior!: string;
  images!: Image[];
  path!: string;
  isSmall: boolean = false;
  num: number = 1;
  faForward = faForward;
  faBackward = faBackward;

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

    this.getImages();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.selectedExterior = changes["selectedExterior"].currentValue;
    this.getImages();
  }

  rotateLeft() {
    this.num += 1;
    if (this.num > 36) {
      this.num = 1;
    }
  }

  rotateRight() {
    this.num -= 1;
    if (this.num < 1) {
      this.num = 36;
    }
  }

  responsiveOptions: object[] = [
    {
      breakpoint: "1024px", // Can't use isSmall here as galleria doesn't accept boolean
      numVisible: 5,
    },
    {
      breakpoint: "768px",
      numVisible: 3,
    },
    {
      breakpoint: "400px",
      numVisible: 2,
    },
  ];

  getImages() {
    this.photoService.getExtImages().then((res) => {
      this.selectedExterior = this.selectedExterior.replace(/\s/g, "_");
      this.path = res.path + this.selectedExterior + "/";
      this.images = res.images;
    });
  }
}
