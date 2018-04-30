import {Component, Input, Output, EventEmitter} from '@angular/core'
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
  @Output() editClicked = new EventEmitter<string>();

  constructor(private customerService: ProjectService){}

  onEdit(){
    alert('YEEEE')
    this.editClicked.emit('A New Value')
  }

  onDelete(){
    this.customerService.deleteProject(this.project)
  }
}