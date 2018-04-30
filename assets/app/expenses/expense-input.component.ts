import {Component} from '@angular/core'
import {ExpenseService} from "./expense.service"
import {Expense} from "./expense.model"
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-expense-input',
  templateUrl: './expense-input.component.html'

})


export class ExpenseInputComponent{

  constructor(private expenseService: ExpenseService){}

  onSubmit(form: NgForm){
const expense = new Expense(form.value.name);
this.expenseService.addExpense(expense);
form.resetForm()

  }
}