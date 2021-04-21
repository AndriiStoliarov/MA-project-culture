import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm: any;
  hide = true;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group ({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
    });
  }

  isControlInvalid(fieldName: string): boolean {
    return (this.loginForm.get(fieldName).invalid
      && (this.loginForm.get(fieldName).dirty
      || this.loginForm.get(fieldName).touched));
  }

  getContolError(controlName: string): string | null {
    const control = this.loginForm.get(controlName);
    if (control.errors.required) {
      return 'Поле не може бути порожнім';
    }
    if (control.errors.email) {
      return 'Введіть правильну ел. адресу';
    }
    return null;
  }

  submit(): void {
    if (this.loginForm.invalid) {
      return;
    }
  }

}
