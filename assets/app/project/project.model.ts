import {Customer} from '../customers/customer.model'
import {Expense} from '../expenses/expense.model'

export class Project {
  name: string;
  customer: Customer;
  expenses: [Expense];
  id: string;

constructor(name: string,  customer?: Customer, expenses?: [Expense], id?: string ){
  this.name = name;
  this.customer = customer
  this.id = id;
  this.expenses = expenses

  }

}