
import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RegistrationComponent } from './registration/registration.component'
import {CommentComponent} from './comment/comment/comment.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'contacts',
        component: ContactsComponent 
      },
      {
        path: 'comment',
        component: CommentComponent 
      }
      /*{
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
      }*/
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
