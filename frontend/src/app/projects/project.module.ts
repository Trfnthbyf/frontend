import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

//import { ProjectComponent } from './project/project.component.ts';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectService } from './project.service';
import { HeroRoutingModule } from './project-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroRoutingModule
  ],
  declarations: [
    ProjectDetailComponent,
    ProjectListComponent],
  providers: [
    ProjectService
  ]
})
export class ProjectModule { }
