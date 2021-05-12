import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Requirement } from '../../types';

@Component({
  selector: 'app-need-form',
  templateUrl: './need-form.component.html',
  styleUrls: ['./need-form.component.css']
})
export class NeedFormComponent implements OnInit {

  needForm: any;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Requirement
  ) { }

  ngOnInit(): void {
    this.needForm = this.fb.group ({
      message: new FormControl('', [
        Validators.required
      ]),
      price: new FormControl('', [
        Validators.required
      ]),
      phone: new FormControl('', [
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
  }

}
