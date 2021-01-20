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


const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'create', canActivate: [AuthGuard], component: CreateComponent},
      {path: 'details/:id', canActivate: [AuthGuard], component: DetailsComponent},
      {path: 'edit/:id', canActivate: [AuthGuard], component: EditComponent},
      {path: 'owned/:id', canActivate: [AuthGuard], component: OwnedComponent},
      {path: 'saved', canActivate: [AuthGuard], component: SavedComponent},
      {path: 'shopcart', canActivate: [AuthGuard], component: ShopCartComponent},
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
