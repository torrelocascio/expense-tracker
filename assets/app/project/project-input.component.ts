import {Component, OnInit} from '@angular/core'
import {ProjectService} from "./project.service"
import {Project} from "./project.model"
import {NgForm} from '@angular/forms'
import { CustomerService } from '../customers/customer.service';
import {Customer} from '../customers/customer.model'

@Component({
  selector: 'app-project-input',
  templateUrl: './project-input.component.html'

})


export class ProjectInputComponent implements OnInit{

  project: Project;
  customers: Customer[]

  constructor(private projectService: ProjectService, private customerService: CustomerService){}

  onSubmit(form: NgForm){
    // if (this.project){
    //   this.project.name = form.value.name;
    //   this.projectService.updateProject(this.project)
    //   .subscribe(
    //     result => console.log(result)
    //   )
    //   this.project = null
    // } else 
    // {
    
const project = new Project(form.value.name,null,form.value.customerSelect.id);
const customer = form.value.customerSelect
this.projectService.addProject(project,customer)
    .subscribe(
      data => console.log('DATAAA',data),
      error => console.log(error),

    )
  
form.resetForm()
  
  }

  onSubmitEdit(form: NgForm){
    if (this.project){
  this.project.name = form.value.name;
  this.project.customerID = form.value.customerSelect.id
  this.projectService.updateProject(this.project)
  .subscribe(
    result => console.log(result)
  )
  this.project = null
}
}

  onClear(form: NgForm){
    this.project=null
    form.resetForm
  }
  ngOnInit(){
    this.projectService.projectIsEdit.subscribe(
      (project: Project) => this.project = project
  
    )
    this.customerService.getCustomers()
    .subscribe(
      (customers: Customer[]) => {
        this.customers=customers;
        console.log("This.Customer",this.customers)
        }
    );
}
}