import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridViewRoutingModule } from './grid-view.routing.module';
import { GridViewComponent } from './grid-view.component';

import { GridModule } from '../../common/component';

@NgModule({
  declarations: [GridViewComponent],
  imports: [
    CommonModule, GridViewRoutingModule, GridModule
  ]
})
export class GridViewModule { }
