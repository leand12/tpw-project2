import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
// import { NoAuthGuard } from './no-auth-guard.service';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [NoAuthGuard]
  },
  {
    path: 'signup',
    component: SignupComponent,
    // canActivate: [NoAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
