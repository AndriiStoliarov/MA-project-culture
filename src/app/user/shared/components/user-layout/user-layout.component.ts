import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.css']
})
export class UserLayoutComponent implements OnInit {

  hiding = false;

  constructor(private router: Router) {
    // tslint:disable-next-line: deprecation
    this.router.events.subscribe(() => {
      this.hiding = this.router.url !== '/user/login';
    });
  }

  ngOnInit(): void { }
}
