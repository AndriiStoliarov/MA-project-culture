import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.css']
})
export class UserLayoutComponent implements OnInit {

  hiding = false;
  firstName = '';
  lastName = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    // tslint:disable-next-line: deprecation
    this.router.events.subscribe(() => {
      // this.hiding = this.router.url !== '/user/login';
      this.hiding = this.authService.isAuthenticated();
      this.firstName = this.authService.user?.first_name;
      this.lastName = this.authService.user?.last_name;
    });
  }

  ngOnInit(): void { }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/user', 'login']);
  }
}
