export class Project {
  name: string;
  customerID: string
  projectId: string;
  expenses: [string]

constructor(name: string, customerID?, projectId?: string, userId?: string, expenses?: [string]){
  this.name = name;
  this.customerID = customerID;
  this.projectId = projectId;
  this.expenses = expenses

  }

}