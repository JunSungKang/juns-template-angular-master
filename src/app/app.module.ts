import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutModule } from './common/layout/layout.module';
import { DateFormatModule } from './common/pipe';

import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, LayoutModule, DateFormatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
