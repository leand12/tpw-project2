import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateComponent } from './pages/create/create.component';
import { DetailsComponent } from './pages/details/details.component';
import { EditComponent } from './pages/edit/edit.component';
import { OwnedComponent } from './pages/owned/owned.component';
import { SavedComponent } from './pages/saved/saved.component';
import { ShopCartComponent } from './pages/shop-cart/shop-cart.component';
import { StoreComponent } from './pages/store/store.component';
import { AuthGuard } from '../../core/guards/auth.guard';
import {NoAuthGuard} from '@core/guards/noauth.guard';


const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {path: 'create', component: CreateComponent},
      {path: 'details/:id', component: DetailsComponent},
      {path: 'edit/:id', component: EditComponent},
      {path: 'owned/:id', component: OwnedComponent},
      {path: 'saved', component: SavedComponent},
      {path: 'shopcart', component: ShopCartComponent},
      {path: 'store', children: [
        {path: '', component: StoreComponent},
        {path: ':type', component: StoreComponent},
        {path: ':type/:platform', component: StoreComponent},
      ]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule {}
