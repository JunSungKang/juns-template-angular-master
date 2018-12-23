import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
    { path: '', redirectTo: '/charts', pathMatch: 'full' },
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
    { path: 'charts', loadChildren: './chart/chart.module#ChartModule' },
    { path: 'form', loadChildren: './form/form.module#FormModule' },
    { path: 'board', loadChildren: './board/board.module#BoardModule' },
    { path: 'shop', loadChildren: './shop/shop.module#ShopModule' },
    { path: 'grid-view', loadChildren: './grid-view/grid-view.module#GridViewModule' }
  ];
   
  @NgModule({
    imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}