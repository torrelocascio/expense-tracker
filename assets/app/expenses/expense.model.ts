export class Expense {
  name: string;
  amount: number;
  id: string;
  projectId: string;

constructor(name: string, id?: string, Id?: string, projectId?: string, amount?:number){
  this.name = name;
  this.id = id;
  this.projectId = projectId;
  this.amount=amount
  
  }

}