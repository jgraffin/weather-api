import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
})
export class FormLoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl('', [Validators.required]),
    });
  }

  get email() {
    return this.loginForm.get('email')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }

  login() {
    if (this.loginForm.valid) {
      console.log(this.loginForm);
    // Lógica de autenticação aqui (pode ser uma chamada a uma API)
    // Após a autenticação bem-sucedida, redirecione para a página principal
    // this.router.navigate(['/']);
    }
  }
}
