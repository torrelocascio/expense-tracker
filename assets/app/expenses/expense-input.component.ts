import {Component, OnInit} from '@angular/core'
import {ExpenseService} from "./expense.service"
import {Expense} from "./expense.model"
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-expense-input',
  templateUrl: './expense-input.component.html'

})


export class ExpenseInputComponent implements OnInit{

  expense: Expense;

  constructor(private expenseService: ExpenseService){}

  onSubmit(form: NgForm){
    if (this.expense){
      this.expense.name = form.value.name;
      this.expenseService.updateExpense(this.expense)
      .subscribe(
        result => console.log(result)
      )
      this.expense = null
    } else {
const expense = new Expense(form.value.name);
this.expenseService.addExpense(expense)
    .subscribe(
      data => console.log('DATAAA',data),
      error => console.log(error),

    )
  }
form.resetForm()
  
  }

  onClear(form: NgForm){
    this.expense=null
    form.resetForm
  }
  ngOnInit(){
    this.expenseService.expenseIsEdit.subscribe(
      (expense: Expense) => this.expense = expense
    )
  }
}