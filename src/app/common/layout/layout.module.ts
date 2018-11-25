import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavComponent, MainComponent],
  imports: [
    CommonModule, RouterModule, FormsModule
  ],
  exports: [ HeaderComponent, NavComponent, FooterComponent, MainComponent ]
})
export class LayoutModule { }
