import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ArticlesRoutingModule } from './articles-routing.module';

import { RichArticleRendererComponent } from './components/rich-article-renderer/rich-article-renderer.component';


import { StoreComponent } from './pages/store/store.component';
import { SavedComponent } from './pages/saved/saved.component';
import { ShopCartComponent } from './pages/shop-cart/shop-cart.component';
import { SettingsComponent } from '../profile/pages/settings/settings.component';
import { DetailsComponent } from './pages/details/details.component';
import { OwnedComponent } from './pages/owned/owned.component';
import { CreateComponent } from './pages/create/create.component';
import { EditComponent } from './pages/edit/edit.component';


@NgModule({
  imports: [
    SharedModule,
    ArticlesRoutingModule,
  ],
  declarations: [
    RichArticleRendererComponent,

    StoreComponent,
    SavedComponent,
    ShopCartComponent,
    SettingsComponent,
    DetailsComponent,
    OwnedComponent,
    CreateComponent,
    EditComponent
  ],
  exports: [
  ],
})
export class ArticlesModule { }
