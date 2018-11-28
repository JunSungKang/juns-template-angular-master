import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormboxComponent } from './formbox.component';

import { SafehtmlModule } from '../pipe'

@NgModule({
  declarations: [FormboxComponent],
  imports: [ CommonModule, SafehtmlModule ],
  exports: [ FormboxComponent ]
})
export class FormboxModule { }
