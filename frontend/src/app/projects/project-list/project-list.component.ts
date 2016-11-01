import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Project, ProjectService }  from '../project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects: Project[];

  private selectedId: number;

  constructor(
    private service: ProjectService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.selectedId = +params['id'];
      this.service.getProjects()
        .then(projects => this.projects = projects);
    });
  }
  isSelected(project: Project) { return project.id === this.selectedId; }

  onSelect(project: Project) {
    this.router.navigate(['/project', project.id]);
  }

}
