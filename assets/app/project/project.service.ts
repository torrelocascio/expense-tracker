import {Http, Response, Headers} from '@angular/http'
import {Injectable, EventEmitter} from "@angular/core"
import 'rxjs/Rx'
import {Observable} from 'rxjs'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import {Project} from "./project.model"
import {Customer} from "../customers/customer.model"
import { ErrorService } from '../errors/error.service';
import { CustomerService } from '../customers/customer.service';

@Injectable()

export class ProjectService{
  projects: Project[] = [];
  customer: Customer = null;
  projectIsEdit = new EventEmitter<Project>()
  
  constructor(private http: Http, private errorService: ErrorService){}

  addProject(project: Project, customer: Customer){
    const body = JSON.stringify(project)
    console.log('body',body);
    const customerBody = JSON.stringify(customer);
    console.log('CustomerBody',customerBody)
    const headers = new Headers({'Content-Type': 'application/json'})
   return this.http.post('https://expense-tracker-torrelocascio.herokuapp.com/projects/' + customer.id,body, {headers: headers})
          .map((response: any) => {
            const result = response.json()
            console.log('response in add project',response)
            const project = new Project(result.obj.name,result.obj._id,result.obj.customerId)
            this.projects.push(project)
            return project
          })
         
          // .catch((error: Response) => {
          //   console.log("ERROR IN ADD")
          //   this.errorService.handleError(error.json())
          //   return Observable.throw(error.json())
          // })
  }

  getProjects(){
    return this.http.get('https://expense-tracker-torrelocascio.herokuapp.com/projects')
      .map((response:Response)=> {
        const projects = response.json().obj;
        console.log('NEWWWW RESSULTTTT', projects)
        console.log('___',projects.customerID)
        let transformedProjects: Project[] = [];
        for(let project of projects) {
          transformedProjects.push(new Project(project.name,project.customer, null, project._id, ))
        }
        
        this.projects = transformedProjects
        console.log('this.projects+++++++++++++',this.projects)
        return transformedProjects
      })
      // .catch((error: Response) => {
      //   this.errorService.handleError(error.json())
      //  return Observable.throw(error.json())
      // })
      
  }

editProject(project: Project){
  this.projectIsEdit.emit(project)
}

updateProject(project:Project){
  const body = JSON.stringify(project)
  const headers = new Headers({'Content-Type': 'application/json'})
 return this.http.patch('https://expense-tracker-torrelocascio.herokuapp.com/projects'+ project.id , body , {headers: headers})
        .map((response: Response) => response.json())
        // .catch((error: Response) => {
        //   this.errorService.handleError(error.json())
        //  return Observable.throw(error.json())
        // })
}

deleteProject(project: Project){
  this.projects.splice(this.projects.indexOf(project), 1);
  console.log(project)
  return this.http.delete('https://expense-tracker-torrelocascio.herokuapp.com/projects/'+ project.id)
  .map((response: Response) => response.json())
//   .catch((error: Response) => {
//     this.errorService.handleError(error.json())
//    return Observable.throw(error.json())
//   })
}


}

