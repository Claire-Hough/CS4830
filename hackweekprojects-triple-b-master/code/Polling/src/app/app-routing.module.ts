import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import {Guard} from './auth/guard.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'admin', loadChildren: './admin/admin.module#AdminPageModule', canActivate: [Guard]},
  { path: 'results', loadChildren: './results/results.module#ResultsPageModule' },
  { path: 'modal', loadChildren: './user/modal.module#ModalPageModule' },
  { path: 'about', loadChildren: './about/about/about.module#AboutPageModule' },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
