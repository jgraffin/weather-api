import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormLoginComponent } from './form-login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ FormLoginComponent ],
  exports: [ FormLoginComponent ],
  imports: [ CommonModule, ReactiveFormsModule ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class FormLoginModule {}
