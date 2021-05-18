import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../../user/shared/services';
import { Login } from '../shared/types';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm: any;
  hide = true;

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
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

    // this.route.queryParams.subscribe((params: Params) => {
    //   if (!params.loginAgain) {
    //     this.router.navigate(['/user', 'posts']);
    //   }
    // });

    const userLogin: Login = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };

    this.authService.login(userLogin).subscribe(() => {
      this.loginForm.reset();
      this.router.navigate(['/user', 'posts']);
    });

  }

}
