import {Component, OnInit} from '@angular/core'
import {Expense} from './expense.model'
import {ExpenseService} from "./expense.service"


@Component({
  selector: 'app-expense-list',
  template: `
  <div class="col-md-8 col-md-offset-2">
    <app-expense 
      [expense]="expense" 
      (editClicked)="expense.name = $event"
      *ngFor="let expense of expenses">
    </app-expense>
  </div>
  `
})

export class ExpenseListComponent implements OnInit {
  expenses: Expense[] 

constructor(private expenseService: ExpenseService){}

ngOnInit(){
  this.expenses = this.expenseService.getExpenses()
}
}