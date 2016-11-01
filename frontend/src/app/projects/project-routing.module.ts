import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { AuthGuard } from '../auth.guard'

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'project',
        component: ProjectListComponent,
        canActivate: [AuthGuard]   
      },
      { path: 'project/:id',
        component: ProjectDetailComponent,
        canActivate: [AuthGuard]   
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class HeroRoutingModule { }

