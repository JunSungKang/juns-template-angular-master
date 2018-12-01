import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BloggerRoutingModule } from './blogger.routing.module';

import { BloggerComponent } from './blogger.component';

import { FormboxModule } from '../common/component';

@NgModule({
  declarations: [BloggerComponent],
  imports: [
    CommonModule, BloggerRoutingModule, FormboxModule
  ]
})
export class BloggerModule { }
