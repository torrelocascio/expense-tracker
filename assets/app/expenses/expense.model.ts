export class Expense {
  name: string;
  amount: number;
  expenseId: string;
  projectId: string;

constructor(name: string, expenseId?: string, Id?: string, projectId?: string, amount?:number){
  this.name = name;
  this.expenseId = expenseId;
  this.projectId = projectId;
  this.amount=amount
  
  }

}