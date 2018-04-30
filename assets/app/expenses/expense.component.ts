import {Component, Input} from '@angular/core'
import {Expense} from "./expense.model"
import { ExpenseService } from './expense.service';


@Component ({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styles: [`
  .author {
      display: inline-block;
      font-style: italic;
      font-size: 12px;
      width: 80%;
  }
  .config {
      display: inline-block;
      text-align:right;
      font-size: 12px;
      width: 19%l
  }
`]

})

export class ExpenseComponent {
  @Input() expense: Expense;

  constructor(private expenseService: ExpenseService){}

  onEdit(){
    this.expenseService.editExpense(this.expense)

  }

  onDelete(){
    this.expenseService.deleteExpense(this.expense)
      .subscribe(
        result => console.log(result)
      )
  }
}

