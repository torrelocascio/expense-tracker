export class Customer {
  name: string;
  id: string;
  projects: [string]

constructor(name: string, id?: string, projects?: [string]){
  this.name = name;
  this.id = id;
  this.projects = projects
  
  }

}