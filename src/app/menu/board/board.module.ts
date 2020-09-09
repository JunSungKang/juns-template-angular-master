import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './board.component';

import { FormsModule } from '@angular/forms';
import { DateFormatModule } from '../../common/pipe';
import { AngularEditorModule } from '@kolkov/angular-editor';

@NgModule({
  declarations: [BoardComponent],
  imports: [
    CommonModule,
    BoardRoutingModule,
    FormsModule,
    DateFormatModule,
    AngularEditorModule
  ]
})
export class BoardModule { }
