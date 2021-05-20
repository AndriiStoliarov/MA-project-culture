import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/user/shared/services';

import { MatDialog } from '@angular/material/dialog';

import { Requirement } from '../../types';
import { NeedFormComponent } from '../need-form/need-form.component';
import { RegistrationPageComponent } from '../registration-page/registration-page.component';

@Component({
  selector: 'app-need',
  templateUrl: './need.component.html',
  styleUrls: ['./need.component.css'],
})
export class NeedComponent implements OnInit {

  @Input() requirement: Requirement;
  private postId: number = null;
  isAuthenticated = false;

  constructor(
    private authService: AuthService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.postId = +this.route.snapshot.params.id;
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  openDialog(): void {
    this.dialog.open(NeedFormComponent, {
      data: {
        description: this.requirement.description,
        id: this.requirement.id,
        postId: this.postId,
      },
    });
  }

  isNavigate(): void {
    if (this.isAuthenticated) {
      this.openDialog();
    } else {
      this.dialog.open(RegistrationPageComponent);
    }
  }
}
