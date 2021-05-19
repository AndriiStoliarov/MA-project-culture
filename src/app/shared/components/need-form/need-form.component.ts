import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NeedService, PostsService } from '../../services';
import { Proposal, Requirement } from '../../types';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-need-form',
  templateUrl: './need-form.component.html',
  styleUrls: ['./need-form.component.css']
})
export class NeedFormComponent implements OnInit {

  needForm: any;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<NeedFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Requirement & { postId: number },
    private route: ActivatedRoute,
    private needService: NeedService,
    private postsService: PostsService,
  ) { }

  ngOnInit(): void {
    this.needForm = this.fb.group ({
      request_id: new FormControl(''),
      description: new FormControl('', [
        Validators.required
      ]),
      price_cents: new FormControl('', [
        Validators.required
      ]),
      phone_number: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{10}$/)
      ])
    });
  }

  isControlInvalid(fieldName: string): boolean {
    return (this.needForm.get(fieldName).invalid
      && (this.needForm.get(fieldName).dirty
      || this.needForm.get(fieldName).touched));
  }

  getContolError(controlName: string): string | null {
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
      console.log('created Need', response);
      this.postsService.getById(this.data.postId).subscribe();
      this.dialogRef.close();
    });
  }

}
