import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

//import { ProjectComponent } from './project/project.component.ts';
import { SignUpComponent } from '../registration/sign-up/sign-up.component';
import { RegistrationComponent } from '../registration/registration.component';
import { LoginRouterModule } from './login-router.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRouterModule
  ],
  declarations: [
    SignUpComponent,
    RegistrationComponent],
  providers: []
})
export class ProjectModule { }