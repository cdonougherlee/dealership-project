import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent {
  @Input() currentPrefDealer!: string;
  @Input() displaySidebar: boolean = false;

  @Output() newDetailsEvent = new EventEmitter<any>();
  outputNewDetails(reqObject: Object) {
    this.newDetailsEvent.emit(reqObject);
  }

  @ViewChild('updateform', { static: false })
  updateForm!: NgForm;

  username!: string | null;

  newPrefDealer!: string;

  faPenToSquare = faPenToSquare;

  isSmall: boolean = false;

  isXSmall: boolean = false;

  errorMsg!: string;

  constructor(
    private auth: AuthService,
    private breakpointService: BreakpointObserver,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.username = this.auth.getUsername();

    this.breakpointService
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((res) => {
        this.isSmall = false;
        this.isXSmall = false;

        this.isSmall = res.breakpoints[Breakpoints.Small];

        if (res.breakpoints[Breakpoints.XSmall]) {
          this.isXSmall = this.isSmall = true;
        }
      });
  }

  // For maps updates
  updatePrefDealer(prefDealer: string) {
    this.newPrefDealer = prefDealer;
  }

  onUpdateSubmit() {
    let username = this.updateForm.value.username;
    if (!username) {
      username = this.username;
    }
    const prefDealer = this.newPrefDealer;

    const headers = new HttpHeaders({ 'Content-type': 'application/json' });

    const reqObject = {
      username: username,
      prefDealer: prefDealer,
    };

    this.http
      .put(`http://localhost:3000/profile/${username}`, reqObject, {
        headers: headers,
      })
      .subscribe({
        // The response data
        // If successful
        next: (response) => {
          this.auth.updateUsername(username);
          this.username = this.auth.getUsername();
          this.displaySidebar = false;
          this.currentPrefDealer = prefDealer;
          this.outputNewDetails(reqObject);
        },
        // If there is an error
        error: (error) => {
          console.log(error);
          console.log(reqObject);
          this.errorMsg = error.error.msg;
        },
        // When observable completes
        complete: () => {},
      });
  }
}
