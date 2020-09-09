import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
    { path: '', redirectTo: '/charts', pathMatch: 'full' },
    { path: 'dashboard', loadChildren: () => import('./menu/dashboard/dashboard.module').then(m => m.DashboardModule) },
    { path: 'charts', loadChildren: () => import('./menu/chart/chart.module').then(m => m.ChartModule) },
    { path: 'form', loadChildren: () => import('./menu/form/form.module').then(m => m.FormModule) },
    { path: 'board', loadChildren: () => import('./menu/board/board.module').then(m => m.BoardModule) },
    { path: 'shop', loadChildren: () => import('./menu/shop/shop.module').then(m => m.ShopModule) },
    { path: 'grid-view', loadChildren: () => import('./menu/grid-view/grid-view.module').then(m => m.GridViewModule) },
    { path: 'flowchart', loadChildren: () => import('./menu/flowchart/flowchart.module').then(m => m.FlowchartModule) }
  ];
   
  @NgModule({
    imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}