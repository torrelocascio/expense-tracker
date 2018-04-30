export class Project {
  name: string;
  customerID: string
  id: string;
  expenses: [string]

constructor(name: string, customerID?, id?: string, userId?: string, expenses?: [string]){
  this.name = name;
  this.customerID = customerID;
  this.id = id;
  this.expenses = expenses

  }

}