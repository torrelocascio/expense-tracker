import {Component} from '@angular/core'
import {ProjectService} from "./project.service"
import {Project} from "./project.model"
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-project-input',
  templateUrl: './project-input.component.html'

})


export class ProjectInputComponent{

  constructor(private projectService: ProjectService){}

  onSubmit(form: NgForm){
const project = new Project(form.value.name);
this.projectService.addProject(project);
form.resetForm()

  }
}