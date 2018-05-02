import {Project} from '../project/project.model'

export class Customer {
  name: string;
  projects: [Project];
  id: string;

constructor(name: string, projects?: [Project],  id?: string, ){
  this.name = name;
  this.projects = projects
  this.id = id;
  
  }

}