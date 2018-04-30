import {Component} from '@angular/core'
import {Project} from "./project.model"


export class ProjectService{
  projects: Project[] = [
    new Project('Project A'),
    new Project ('Project B')
  ];

  addProject(project: Project){
    this.projects.push(project);
    console.log(project)
  }

  getProjects(){
    return this.projects
  }

  deleteProject(project: Project){
    this.projects.splice(this.projects.indexOf(project), 1);
  }
}