import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TagFilterComponent} from './tag-filter/tag-filter.component';

const routes: Routes = [
  {path: 'tags', component: TagFilterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
