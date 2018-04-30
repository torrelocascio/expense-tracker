import {Component, OnInit} from '@angular/core'
import {Project} from './project.model'
import {ProjectService} from "./project.service"


@Component({
  selector: 'app-project-list',
  template: `
  <div class="col-md-8 col-md-offset-2">
    <app-project 
      [project]="project" 
      (editClicked)="project.name = $event"
      *ngFor="let project of projects">
    </app-project>
  </div>
  `
})

export class ProjectListComponent implements OnInit {
  projects: Project[] 

constructor(private projectService: ProjectService){}

ngOnInit(){
  this.projects = this.projectService.getProjects()
}
}