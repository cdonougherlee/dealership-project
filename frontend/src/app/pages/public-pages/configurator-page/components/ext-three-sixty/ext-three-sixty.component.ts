import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, SimpleChanges } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { faForward } from '@fortawesome/free-solid-svg-icons';
import { faBackward } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ext-three-sixty',
  templateUrl: './ext-three-sixty.component.html',
  styleUrls: ['./ext-three-sixty.component.scss'],
})
export class ExtThreeSixtyComponent {
  @Input()
  colour!: String;

  images!: any[];

  path!: String;

  isSmall: boolean = false;

  num: any = '1';

  faForward = faForward;
  faBackward = faBackward;

  rotateLeft() {
    this.num = parseInt(this.num);
    this.num += 1;
    if (this.num > 5) {
      this.num = 2;
    }
    this.num = this.num.toString();
  }

  rotateRight() {
    this.num = parseInt(this.num);
    this.num -= 1;
    if (this.num < 2) {
      this.num = 5;
    }
    this.num = this.num.toString();
  }

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px', // Can't use isSmall here as that is type boolean
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
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.breakpointService
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((res) => {
        this.isSmall = false;

        if (res.matches) {
          this.isSmall = true;
        }
      });

    this.getImages();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.colour = changes['colour'].currentValue;
    this.getImages();
  }

  getImages() {
    this.dataService.getConfigExtImages().then((res) => {
      this.path = res.path + this.colour + '-';
      this.images = res.images;
    });
  }
}
