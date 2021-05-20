import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

import { NeedService, PostsService } from '../../services';
import { Proposal, Requirement } from '../../types';
import { ProposalMessageComponent } from '../proposal-message/proposal-message.component';

@Component({
  selector: 'app-need-form',
  templateUrl: './need-form.component.html',
  styleUrls: ['./need-form.component.css'],
})
export class NeedFormComponent implements OnInit {

  needForm: any;
  durationInSeconds = 5;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<NeedFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Requirement & { postId: number },
    private needService: NeedService,
    private postsService: PostsService,
    private matSnackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.needForm = this.fb.group ({
      request_id: new FormControl(''),
      description: new FormControl('', [
        Validators.required,
      ]),
      price_cents: new FormControl('', [
        Validators.required,
      ]),
      phone_number: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{10}$/),
      ]),
    });
  }

  isControlInvalid(fieldName: string): boolean {
    return (this.needForm.get(fieldName).invalid
      && (this.needForm.get(fieldName).dirty
      || this.needForm.get(fieldName).touched));
  }

  getControlError(controlName: string): string | null {
    const control = this.needForm.get(controlName);
    if (control.errors.required) {
      return 'Поле не може бути порожнім';
    }

    if (control.errors.pattern !== /^\d{10}$/) {
      return 'Введіть 10-значний номер';
    }
    return null;
  }

  submit(): void {
    if (this.needForm.invalid) {
      return;
    }

    this.needForm.controls.request_id.setValue(this.data.id);

    const jsonData = this.needForm.value;

    this.needService.postData(jsonData).subscribe((response: Proposal) => {
      this.postsService.getById(this.data.postId).subscribe();
      this.dialogRef.close();
      this.matSnackBar.openFromComponent(ProposalMessageComponent, {
        duration: this.durationInSeconds * 1000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    });
  }

}
