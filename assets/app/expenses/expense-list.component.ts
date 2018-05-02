import {Component, OnInit} from '@angular/core'
import {Expense} from './expense.model'
import {ExpenseService} from "./expense.service"


@Component({
  selector: 'app-expense-list',
  template: `
  <div class="container">
  <div class="row">
  <div class="col-xs-1">Edit</div>
  <div class="col-xs-2"><p>Date</p></div>
  <div class="col-xs-2">Customer</div>
  <div class="col-xs-2">Project</div>
  <div class="col-xs-2">Expense Name</div>
  <div class="col-xs-1">Amount</div>
  <div class="col-xs-1">Delete</div>
</div>
    <app-expense 
      [expense]="expense" 
      *ngFor="let expense of expenses">
    </app-expense>
  </div>
  `
})

export class ExpenseListComponent implements OnInit {
  expenses: Expense[] 

constructor(private expenseService: ExpenseService){}

ngOnInit(){
  this.expenseService.getExpenses()
    .subscribe(
      (expenses: Expense[]) =>{
        this.expenses=expenses
        }
    );

}

}