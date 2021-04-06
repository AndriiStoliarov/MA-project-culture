import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  registrationForm: any;

  ngOnInit(): void {
    this.registrationForm = this.fb.group ({
      name: new FormControl('', [
        Validators.required
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{10}$/)
      ]),
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
    return (this.registrationForm.get(fieldName).invalid
      && (this.registrationForm.get(fieldName).dirty
      || this.registrationForm.get(fieldName).touched));
  }

  getControlName(controlName: string): boolean {
    return this.registrationForm.get(controlName);
  }

  getContolError(controlName: string): string | null {
    const control = this.registrationForm.get(controlName);
    if (control.errors.required) {
      return 'The field cannot be empty';
    }
    if (control.errors.email) {
      return 'Enter correct email';
    }
    if (control.errors.patter !== /^\d{10}$/) {
      return 'Enter the 10-digit number';
    }
    return null;
  }
}
