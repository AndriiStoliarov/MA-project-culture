import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/user/shared/services';

import { MatDialog } from '@angular/material/dialog';

import { RegistrationPageComponent } from '../registration-page/registration-page.component';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
})
export class MainLayoutComponent implements OnInit {

  hiding = false;
  firstName = '';
  lastName = '';

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private authService: AuthService,
  ) {
    // tslint:disable-next-line: deprecation
    this.router.events.subscribe(() => {
      this.hiding = this.authService.isAuthenticated();
      this.firstName = this.authService.user?.first_name;
      this.lastName = this.authService.user?.last_name;
    });
  }

  ngOnInit(): void { }

  openDialog(): void {
    this.dialog.open(RegistrationPageComponent);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/user', 'login']);
  }

  isNavigate(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/user', 'event']);
    } else {
      this.openDialog();
    }
  }

}
