import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BloggerRoutingModule } from './blogger.routing.module';

import { BloggerComponent } from './blogger.component';

@NgModule({
  declarations: [BloggerComponent],
  imports: [
    CommonModule, BloggerRoutingModule
  ]
})
export class BloggerModule { }
