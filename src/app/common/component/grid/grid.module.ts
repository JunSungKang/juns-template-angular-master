import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { SafehtmlModule } from '../../pipe';

@NgModule({
  declarations: [GridComponent],
  imports: [
    CommonModule, SafehtmlModule
  ],
  exports: [ GridComponent ]
})
export class GridModule { }
