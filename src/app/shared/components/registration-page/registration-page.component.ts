import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../../services';
import { User } from '../../types';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  registrationForm: any;

  constructor(
    // private registrationService: RegistrationService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: new FormControl('', [
        Validators.required
      ]),
      phone: new FormControl('', [
        Validators.required
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
    return (this.registrationForm.get(fieldName).invalid && this.registrationForm.get(fieldName).touched);
  }

  getContolError(controlName: string): string | null {
    const control = this.registrationForm.get(controlName);
    if (control.errors.required) {
      return 'The field cannot be empty';
    }
    if (control.errors.email) {
      return 'Enter correct email';
    }
    return null;
  }

  submit(): void {
    if (this.registrationForm.invalid) {
      return;
    }

    // const data: User = {
    //   name: this.registrationForm.value.name,
    //   phone: this.registrationForm.value.phone,
    //   email: this.registrationForm.value.email,
    //   password: this.registrationForm.value.password
    // };

    // // tslint:disable-next-line: deprecation
    // this.registrationService.createUser(data).subscribe(() => {
    //   console.log('Registration successfully.');
    //   this.registrationForm.reset();
    //   this.router.navigate(['/home']);
    // });
  }

}
