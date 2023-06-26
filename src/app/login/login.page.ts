import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { loginMock } from '../services/enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  errorCredentials = false;

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.valid) {
      console.table(this.loginForm.value);

      if (
        loginMock.email === this.loginForm.value.email &&
        loginMock.password === this.loginForm.value.password
      ) {
        this.router.navigate(['/']);
      } else {
        this.errorCredentials = true;
      }
    }
  }
}
