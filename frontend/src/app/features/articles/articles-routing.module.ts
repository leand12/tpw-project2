import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateComponent } from './pages/create/create.component';
import { DetailsComponent } from './pages/details/details.component';
import { EditComponent } from './pages/edit/edit.component';
import { OwnedComponent } from './pages/owned/owned.component';
import { SavedComponent } from './pages/saved/saved.component';
import { ShopCartComponent } from './pages/shop-cart/shop-cart.component';
import { StoreComponent } from './pages/store/store.component';

// import { NoAuthGuard } from './no-auth-guard.service';

const routes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'edit', component: EditComponent },
  { path: 'owned', component: OwnedComponent },
  { path: 'saved', component: SavedComponent },
  { path: 'shopcart', component: ShopCartComponent },
  { path: ':articleType', component: StoreComponent},
  { path: '', component: StoreComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule {}
