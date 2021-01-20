import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  NavbarComponent,
  ErrorBoxComponent,
  ViewGamesFilterComponent,
  ArticlesWidgetComponent,
} from './components/';
import { ArticlesWidgetChildComponent } from './components/articles-widget-child/articles-widget-child.component';
import { ArrayLengthPipe } from './pipes/array-length.pipe';
import { ReviewCommentComponent } from './components/review-comment/review-comment.component';
import { PaginationDirective } from './directives/pagination.directive';

/*
* Contains all the commonly used directives, pipes, and components.
*
* Re-exports other Common Angular Modules (CommonModule, ...).
* Doesn't have providers or imported modules with providers.
* Imported by all FeatureModules that need the shared functionality.
* */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  declarations: [
    NavbarComponent,
    ErrorBoxComponent,
    ViewGamesFilterComponent,
    ArticlesWidgetComponent,
    ArticlesWidgetChildComponent,
    ReviewCommentComponent,

    ArrayLengthPipe,

    PaginationDirective,
  ],
    exports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule,

      NavbarComponent,
      ErrorBoxComponent,
      ViewGamesFilterComponent,
      ArticlesWidgetComponent,
      ReviewCommentComponent,

      ArrayLengthPipe,

      PaginationDirective,
    ]
})
export class SharedModule { }
