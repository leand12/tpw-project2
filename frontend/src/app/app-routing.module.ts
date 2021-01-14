import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules, ExtraOptions} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routerOptions: ExtraOptions = {
  // useHash: false,
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
  // preload all modules
  preloadingStrategy: PreloadAllModules
};

const routes: Routes = [
  {path: 'articles', loadChildren: './features/articles/articles.module#ArticlesModule'},
  {path: 'profile', loadChildren: './features/profile/profile.module#ProfileModule'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
