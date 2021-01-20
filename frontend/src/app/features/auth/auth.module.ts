import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {ArticlesModule} from '../articles/articles.module';


@NgModule({
  imports: [
    SharedModule,
    AuthRoutingModule,
    ArticlesModule
  ],
  declarations: [
    SignupComponent,
    LoginComponent,
    HomeComponent
  ],
})
export class AuthModule { }
