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
console.log('Here is New Project Object',project)
const customer = form.value.customerSelect
console.log('Here is the new customer Object',customer)
this.projectService.addProject(project,customer)
    .subscribe(
      data => console.log('DATAAA',data),
      error => console.log(error),

    )
  
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
    this.customerService.getCustomers()
    .subscribe(
      (customers: Customer[]) => {
        this.customers=customers;
        console.log("This.Customer",this.customers)
        }
    );
}
}