import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './account/login/login.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/account/login', pathMatch: 'full' },
  { path: 'account', loadChildren: './account/account.module#AccountModule' }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}