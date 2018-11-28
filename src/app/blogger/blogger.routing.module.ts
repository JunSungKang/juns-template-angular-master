import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BloggerComponent } from './blogger.component';

const routes: Routes = [
  { path: '', component: BloggerComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class BloggerRoutingModule { }

