import {Component, Input} from '@angular/core'
import {Project} from "./project.model"
import { ProjectService } from './project.service';


@Component ({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styles: [`
  .author {
      display: inline-block;
      font-style: italic;
      font-size: 12px;
      width: 80%;
  }
  .config {
      display: inline-block;
      text-align:right;
      font-size: 12px;
      width: 19%l
  }
`]

})

export class ProjectComponent {
  @Input() project: Project;

  constructor(private projectService: ProjectService){}

  onEdit(){
    this.projectService.editProject(this.project)

  }

  onDelete(){
    this.projectService.deleteProject(this.project)
      .subscribe(
        result => console.log(result)
      )
  }
}

