import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
    { path: '', redirectTo: '/charts', pathMatch: 'full' },
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
    { path: 'charts', loadChildren: './chart/chart.module#ChartModule' },
    { path: 'blogger', loadChildren: './blogger/blogger.module#BloggerModule' },
    { path: 'grid-view', loadChildren: './grid-view/grid-view.module#GridViewModule' }
    // { path: 'service', loadChildren: './service-center/service-center.module#ServiceCenterModule' }
  ];
   
  @NgModule({
    imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}