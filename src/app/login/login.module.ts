import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';
import { FormLoginModule } from '../components/form-login/form-login.module'
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPage } from './login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    FormLoginModule,
    ReactiveFormsModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
