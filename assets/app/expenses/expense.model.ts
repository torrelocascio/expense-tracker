export class Expense {
  name: string;
  amount: number;
  date: Date;
  id: string;
  project: string
  

constructor(name: string, amount: number, date: Date, id?: string, project?: string){
  this.name = name;
  this.amount= amount;
  this.date = date
  this.id = id;
  this.project = project
  
  }

}