import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ArticlesRoutingModule } from './articles-routing.module';


import { StoreComponent } from './pages/store/store.component';
import { SavedComponent } from './pages/saved/saved.component';
import { ShopCartComponent } from './pages/shop-cart/shop-cart.component';
import { DetailsComponent } from './pages/details/details.component';
import { OwnedComponent } from './pages/owned/owned.component';
import { CreateComponent } from './pages/create/create.component';
import { EditComponent } from './pages/edit/edit.component';

import { RichArticleRendererComponent } from './components/rich-article-renderer/rich-article-renderer.component';
import { CompactArticleRendererComponent } from './components/compact-article-renderer/compact-article-renderer.component';
import { ArticleForm1Component } from './components/article-form1/article-form1.component';
import { ArticleForm2Component } from './components/article-form2/article-form2.component';
import { GameFormComponent } from './components/game-form/game-form.component';
import { ConsoleFormComponent } from './components/console-form/console-form.component';
import { ReviewFormComponent } from './components/review-form/review-form.component';


@NgModule({
  imports: [
    SharedModule,
    ArticlesRoutingModule,
  ],
  declarations: [
    StoreComponent,
    SavedComponent,
    ShopCartComponent,
    DetailsComponent,
    OwnedComponent,
    CreateComponent,
    EditComponent,

    RichArticleRendererComponent,
    CompactArticleRendererComponent,
    ArticleForm1Component,
    ArticleForm2Component,
    GameFormComponent,
    ConsoleFormComponent,
    ReviewFormComponent,
  ],
  exports: [
    CompactArticleRendererComponent
  ],
})
export class ArticlesModule { }
