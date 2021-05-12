import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../../services/user-auth.sarvice';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.css']
})
export class UserLayoutComponent implements OnInit {

  hiding = false;

  constructor(
    private router: Router,
    private userAuthService: UserAuthService
  ) {
    // tslint:disable-next-line: deprecation
    this.router.events.subscribe(() => {
      this.hiding = this.router.url !== '/user/login';
    });
  }

  ngOnInit(): void { }

  logout(): void {
    this.userAuthService.logout();
    this.router.navigate(['/user', 'login']);
  }
}
