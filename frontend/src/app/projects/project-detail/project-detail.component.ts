import { Component, OnInit, HostBinding,
  trigger, transition, animate,
  style, state } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { Project, ProjectService }  from '../project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  animations: [
    trigger('routeAnimation', [
      state('*',
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.2s ease-in')
      ]),
      transition('* => void', [
        animate('0.5s ease-out', style({
          opacity: 0,
          transform: 'translateY(100%)'
        }))
      ])
    ])
  ]
})
export class ProjectDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }

  @HostBinding('style.display') get display() {
    return 'block';
  }

  @HostBinding('style.position') get position() {
    return 'absolute';
  }
  project: Project;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProjectService) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id']; // (+) converts string 'id' to a number
      this.service.getProject(id).then(project => this.project = project);
    });
  }
  gotoProject() {
    let projectId = this.project ? this.project.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    this.router.navigate(['/project', { id: projectId, foo: 'foo' }]);
  }
}
