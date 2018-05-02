import {Component, OnInit} from '@angular/core'
import {ExpenseService} from "./expense.service"
import {Expense} from "./expense.model"
import {NgForm} from '@angular/forms'
import { ProjectService } from '../project/project.service';
import {Project} from '../project/project.model'
import { CustomerService } from '../customers/customer.service';

@Component({
  selector: 'app-expense-input',
  templateUrl: './expense-input.component.html'

})


export class ExpenseInputComponent implements OnInit{

  expense: Expense;
  projects: Project[];
  expenses: Expense[];
  newExpense: Expense

  constructor(private expenseService: ExpenseService, private projectService: ProjectService, private customerService: CustomerService){}

  onSubmit(form: NgForm){
    // if (this.expense){
    //   this.expense.name = form.value.name;
    //   this.expenseService.updateExpense(this.expense)
    //   .subscribe(
    //     result => console.log(result)
    //   )
    //   this.expense = null
    // } else {
const expense = new Expense(form.value.name,form.value.amount, form.value.date, );
console.log('new expense in onsubmit expense-input',expense)
const project = form.value.projectSelect
console.log('project in expense-input', project)

this.expenseService.addExpense(expense,project)
    // .subscribe(
    //   (newExpense: Expense) =>{
    //     this.expense=newExpense
    //     }
    // );
    form.resetForm()

    // this.expenseService.getExpenses()
    // .subscribe(
    //   (expenses: Expense[]) =>{
    //     this.expenses=expenses
    //     }
    // );
      // data => console.log('DATAAA in onsubmit expense-input',data),
      // error => console.log(error),
    
    
    
  }

  onSubmitEdit(form: NgForm){
        if (this.expense){
      this.expense.name = form.value.name;
      this.expense.amount = form.value.amount
      this.expense.date = form.value.date
      this.expenseService.updateExpense(this.expense)
      .subscribe(
        result => console.log('result in OnsubmitEdit for expense',result)
      )
      this.expense = null
      
  }
}

  onClear(form: NgForm){
    this.expense=null
    form.resetForm
  }
  ngOnInit(){
    this.expenseService.expenseIsEdit.subscribe(
      (expense: Expense) => this.expense = expense
    )
    this.projectService.getProjects()
    .subscribe(
      (projects: Project[]) => {
        this.projects=projects;
        }
    );
  }
}