import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from './modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ ModalComponent ],
  exports: [ ModalComponent ],
  imports: [ CommonModule, ReactiveFormsModule, FormsModule ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ModalModule {}
