import {Http, Response, Headers} from '@angular/http'
import {Injectable, EventEmitter} from "@angular/core"
import 'rxjs/Rx'
import {Observable} from 'rxjs'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import {Project} from "./project.model"
import {Customer} from "../customers/customer.model"
import { ErrorService } from '../errors/error.service';

@Injectable()

export class ProjectService{
  projects: Project[] = [];
  projectIsEdit = new EventEmitter<Project>()
  
  constructor(private http: Http, private errorService: ErrorService) {}

  addProject(project: Project, customer: Customer){
    const body = JSON.stringify(project)
    const headers = new Headers({'Content-Type': 'application/json'})
   return this.http.post('http://localhost:3000/project' + customer.id,body, {headers: headers})
          .map((response: any) => {
            const result = response.json()
            const project = new Project(result.obj.name,result.obj._id,result.obj.customerId)
            this.projects.push(project)
            console.log("HERE")
            return project
          })
         
          .catch((error: Response) => {
            console.log("ERROR IN ADD")
            this.errorService.handleError(error.json())
           return Observable.throw(error.json())
          })
  }

  getProjects(){
    return this.http.get('http://localhost:3000/project')
      .map((response:Response)=> {
        const projects = response.json().obj;
        let transformedProjects: Project[] = [];
        for(let project of projects) {
          transformedProjects.push(new Project(project.name, project._id))
        }
        this.projects = transformedProjects
        return transformedProjects
      })
      .catch((error: Response) => {
        this.errorService.handleError(error.json())
       return Observable.throw(error.json())
      })
      
  }

editProject(project: Project){
  this.projectIsEdit.emit(project)
}

updateProject(project:Project){
  const body = JSON.stringify(project)
  const headers = new Headers({'Content-Type': 'application/json'})
 return this.http.patch('http://localhost:3000/project/'+ project.id , body , {headers: headers})
        .map((response: Response) => response.json())
        .catch((error: Response) => {
          this.errorService.handleError(error.json())
         return Observable.throw(error.json())
        })
}

deleteProject(project: Project){
  this.projects.splice(this.projects.indexOf(project), 1);
  console.log(project)
  return this.http.delete('http://localhost:3000/project/'+ project.id)
  .map((response: Response) => response.json())
  .catch((error: Response) => {
    this.errorService.handleError(error.json())
   return Observable.throw(error.json())
  })
}

}

