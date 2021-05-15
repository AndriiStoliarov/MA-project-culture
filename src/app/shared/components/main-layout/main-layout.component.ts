import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationPageComponent } from '../registration-page/registration-page.component';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {

  }

  openDialog(): void {
    this.dialog.open(RegistrationPageComponent);
  }

}
