import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateformatPipe } from './dateformat.pipe';

@NgModule({
  declarations: [ DateformatPipe ],
  imports: [ CommonModule ],
  exports: [ DateformatPipe ]
})
export class DateFormatModule { }
