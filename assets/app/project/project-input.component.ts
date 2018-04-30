import {Component, OnInit} from '@angular/core'
import {ProjectService} from "./project.service"
import {Project} from "./project.model"
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-project-input',
  templateUrl: './project-input.component.html'

})


export class ProjectInputComponent implements OnInit{

  project: Project;

  constructor(private projectService: ProjectService){}

  onSubmit(form: NgForm){
    if (this.project){
      this.project.name = form.value.name;
      this.projectService.updateProject(this.project)
      .subscribe(
        result => console.log(result)
      )
      this.project = null
    } else {
const project = new Project(form.value.name);
this.projectService.addProject(project)
    .subscribe(
      data => console.log('DATAAA',data),
      error => console.log(error),

    )
  }
form.resetForm()
  
  }

  onClear(form: NgForm){
    this.project=null
    form.resetForm
  }
  ngOnInit(){
    this.projectService.projectIsEdit.subscribe(
      (project: Project) => this.project = project
    )
  }
}