import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgForm } from '@angular/forms';
import { Utils } from 'src/app/core/utils/utils';
import { Router } from '@angular/router';
import { ProfileUpdate } from 'src/app/core/interfaces/ProfileUpdate';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent {
  @Input() currentPrefDealer!: string;
  @Output() newDetailsEvent = new EventEmitter<ProfileUpdate>();
  @ViewChild('updateform', { static: false })
  updateForm!: NgForm;
  displaySidebar: boolean = false;
  username!: string | null;
  newPrefDealer!: string;
  faPenToSquare = faPenToSquare;
  isSmall: boolean = false;
  isXSmall: boolean = false;
  errorMsg!: string | null;

  constructor(
    private auth: AuthService,
    private breakpointService: BreakpointObserver,
    private router: Router,
    private utils: Utils
  ) {}

  ngOnInit() {
    this.username = this.utils.getUsername();
    this.breakpointService
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((res) => {
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

  outputNewDetails(reqObject: ProfileUpdate) {
    this.newDetailsEvent.emit(reqObject);
  }

  onUpdateSubmit() {
    let username = this.updateForm.value.username;
    if (!username) {
      username = this.username;
    }
    const prefDealer: string = this.newPrefDealer;

    const reqObject: ProfileUpdate = {
      username: username,
      prefDealer: prefDealer,
    };

    return this.auth.updateProfile(reqObject, username).subscribe({
      next: () => {
        this.utils.updateUsername(username);
        this.username = this.utils.getUsername();
        this.displaySidebar = false;
        this.currentPrefDealer = prefDealer;
        this.outputNewDetails(reqObject);
        this.errorMsg = null;
      },
      error: (error) => {
        this.errorMsg = error;
      },
    });
  }

  onDelete() {
    return this.auth.deleteProfile(this.username).subscribe({
      next: () => {
        this.auth.logout();
        this.errorMsg = null;
      },
      error: (error) => {
        this.errorMsg = error;
      },
      complete: () => {
        this.router.navigate([`/landing`]);
      },
    });
  }
}
