import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/user/shared/services';
import { RegistrationPageComponent } from '../registration-page/registration-page.component';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  hiding = false;
  firstName = '';
  lastName = '';

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private authService: AuthService
  ) {
    // tslint:disable-next-line: deprecation
    this.router.events.subscribe(() => {
      this.hiding = this.authService.isAuthenticated();
      this.firstName = localStorage.getItem('firstName');
      this.lastName = localStorage.getItem('lastName');
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
