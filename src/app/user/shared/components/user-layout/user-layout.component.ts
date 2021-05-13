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
      this.hiding = this.router.url !== '/user/login';
      this.firstName = localStorage.getItem('firstName');
      this.lastName = localStorage.getItem('lastName');
    });
  }

  ngOnInit(): void { }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/user', 'login']);
  }
}
