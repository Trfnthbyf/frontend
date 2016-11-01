import {ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './registration/login/login.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AppRoutingModule } from './app-routing.module';

import { ProjectModule } from './projects/project.module';
import { SignInComponent } from './registration/sign-in/sign-in.component';
import { SignUpComponent } from './registration/sign-up/sign-up.component';
import { RegistrationComponent } from './registration/registration.component';
import { MenuComponent } from './menu/menu.component';

import { UserService } from './services/user.service';
import { CommentService } from './comment/comment.service';
import { SocialNetworksComponent } from './registration/social-networks/social-networks.component';
import { AuthGuard } from './auth.guard';
import { AuthenticationService } from './services/authentication.service';
import { LoginRouterModule } from './registration/login-router.module';
import { EqualValidatorDirective } from './equal-validator.directive';
import { CommentComponent } from './comment/comment/comment.component';
import { DataDrivenComponent } from './data-driven/data-driven.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ContactsComponent,
    RegistrationComponent,
    MenuComponent,
    SocialNetworksComponent,
    SignUpComponent,
    SignInComponent,
    EqualValidatorDirective,
    CommentComponent,
    DataDrivenComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ProjectModule,
    AppRoutingModule,
    LoginRouterModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    AuthGuard,
    AuthenticationService,
    CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
