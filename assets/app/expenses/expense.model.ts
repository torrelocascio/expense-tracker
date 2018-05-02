import {Project} from '../project/project.model'

export class Expense {
  name: string;
  amount: number;
  date: Date;
  project: Project;
  id: string;
  

constructor(name: string, amount: number, date: Date, project?: Project, id?: string){
  this.name = name;
  this.amount= amount;
  this.date = date
  this.project = project
  this.id = id;
  
  }

}