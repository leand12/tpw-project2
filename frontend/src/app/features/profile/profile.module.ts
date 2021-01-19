import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';

import { DetailsComponent } from './pages/details/details.component';
import { EditComponent } from './pages/edit/edit.component';


@NgModule({
  imports: [
    SharedModule,
    ProfileRoutingModule
  ],
  declarations: [DetailsComponent, EditComponent],
})
export class ProfileModule { }
