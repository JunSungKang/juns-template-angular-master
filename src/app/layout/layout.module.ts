import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, HttpClientModule, RouterModule
  ],
  declarations: [MenuComponent, FooterComponent, MainComponent],
  exports: [MenuComponent, FooterComponent, MainComponent]
})
export class LayoutModule { }
