import {Component, Input, Output, EventEmitter} from '@angular/core'
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
  @Output() editClicked = new EventEmitter<string>();

  constructor(private expenseService: ExpenseService){}

  onEdit(){
    alert('YEEEE')
    this.editClicked.emit('A New Value')
  }

  onDelete(){
    this.expenseService.deleteExpense(this.expense)
  }
}