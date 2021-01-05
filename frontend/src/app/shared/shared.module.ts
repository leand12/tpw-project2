import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {
  NavbarComponent,
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
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    NavbarComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,

    NavbarComponent,
  ]
})
export class SharedModule { }
