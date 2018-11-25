import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'charts', loadChildren: './chart/chart.module#ChartModule' }
    // { path: 'notice', loadChildren: './notice/notice.module#NoticeModule' },
    // { path: 'adware', loadChildren: './adware/adware.module#AdwareModule' },
    // { path: 'service', loadChildren: './service-center/service-center.module#ServiceCenterModule' }
  ];
   
  @NgModule({
    imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}