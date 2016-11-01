import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { SignInComponent } from '../registration/sign-in/sign-in.component';
import { SignUpComponent } from '../registration/sign-up/sign-up.component';
import { RegistrationComponent } from '../registration/registration.component';
import { AuthGuard } from '../auth.guard'

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'registration',
        component: RegistrationComponent        
      },
      { path: 'registration/confirm',
        component: SignUpComponent          
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class LoginRouterModule {}