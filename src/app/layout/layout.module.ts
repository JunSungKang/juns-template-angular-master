import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule, HttpClientModule
  ],
  declarations: [HeaderComponent, MenuComponent, FooterComponent, MainComponent],
  exports: [HeaderComponent, MenuComponent, FooterComponent, MainComponent]
})
export class LayoutModule { }
