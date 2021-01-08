import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  NavbarComponent,
  ErrorBoxComponent,
  CompactArticleRendererComponent,
  ViewGamesFilterComponent,
} from './components/';

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
    CompactArticleRendererComponent,
    ViewGamesFilterComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    NavbarComponent,
    ErrorBoxComponent,
    CompactArticleRendererComponent,
    ViewGamesFilterComponent,
  ]
})
export class SharedModule { }
