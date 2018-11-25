import { NgModule } from '@angular/core';
import { DateformatPipe } from './dateformat/dateformat.pipe';

@NgModule({
  declarations: [DateformatPipe],
  imports: [],
  exports: [ DateformatPipe ]
})
export class CommonModule { }
