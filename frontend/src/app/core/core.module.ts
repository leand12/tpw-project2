import { NgModule, Optional, SkipSelf } from '@angular/core';

import { CommonModule } from '@angular/common';

import {AuthService} from './services/auth.service';
import {AuthGuard} from './guards/auth.guard';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './interceptors/auth.interceptor';


// import { UserService } from './services/user.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
