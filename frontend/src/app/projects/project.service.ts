import { Injectable } from '@angular/core';

export class Project {
  constructor(public id: number, public name: string) {}
}

let PROJECTS = [
  new Project(11, 'Project 1'),
  new Project(12, 'Project 2'),
  new Project(13, 'Project 3'),
  new Project(14, 'Project 4'),
  new Project(15, 'Project 5'),
  new Project(16, 'Project 6')
];

let projectPromise = Promise.resolve(PROJECTS);

@Injectable()
export class ProjectService {
  getProjects() {return projectPromise}

  getProject(id: number | string) {
    return projectPromise
      .then(projrcts => projrcts.find(hero => hero.id === +id));
  }

}
