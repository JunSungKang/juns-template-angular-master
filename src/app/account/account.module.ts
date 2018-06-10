import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { AccountRoutingModule } from './account.routing.module';

import { LoginComponent } from './login/login.component';
import { JoinComponent } from './join/join.component';

@NgModule({
  imports: [
    CommonModule, AccountRoutingModule
  ],
  declarations: [LoginComponent, JoinComponent]
})
export class AccountModule { }
