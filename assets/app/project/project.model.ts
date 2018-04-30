export class Project {
  name: string;
  id: string;
  customerID: string
  expenses: [string]

constructor(name: string, id?: string,  customerID?: string, expenses?: [string]){
  this.name = name;
  this.id = id;
  this.customerID = customerID;
  this.expenses = expenses

  }

}