import {Http, Response, Headers} from '@angular/http'
import {Injectable, EventEmitter} from "@angular/core"
import 'rxjs/Rx'
import {Observable} from 'rxjs'


import {Expense} from "./expense.model"
import {Project} from "../project/project.model"
import { ErrorService } from '../errors/error.service';

@Injectable()

export class ExpenseService{
  expenses: Expense[] = [];
  project: Project = null
  expenseIsEdit = new EventEmitter<Expense>()

  constructor(private http: Http, private errorService: ErrorService) {}

  addExpense(expense: Expense, project: Project){
    console.log('project in add expense')
    const body = JSON.stringify(expense)
    console.log('body',body)
    const headers = new Headers({'Content-Type': 'application/json'})
   return this.http.post('http://git.heroku.com/expense-tracker-torrelocascio.gitexpense/' + expense.project.id,body, {headers: headers})
          .map((response: any) => {
            const result = response.json()
            console.log('resultttttttttt',result)
            const expense = new Expense(result.obj.name,result.obj.amount,result.obj.date,result.object.project,result.obj._id)
            console.log('new expense in addexpense',expense)
            // this.expenses.push(expense)
            this.expenses.push(expense)
            console.log('full expense after in add expense which is returned',expense)
            return expense
          })
         
          // .catch((error: Response) => {
          //   console.log("ERROR IN ADD")
          //   this.errorService.handleError(error.json())
          //  return Observable.throw(error.json())
          // })
  }

  getExpenses(){
    return this.http.get('https://git.heroku.com/expense-tracker-torrelocascio.git/expense')
      .map((response:any)=> {
        // console.log("HERE IS RESPONSE",response.json().obj)
        const expenses = response.json().obj;
        let transformedExpenses: Expense[] = [];
        for(let expense of expenses) {
          console.log('GetEXPENSESSSSSS',expenses)
          transformedExpenses.push(new Expense(expense.name, expense.amount, expense.date,expense.project, expense._id))
        }
    
        this.expenses = transformedExpenses
        console.log('this.expensessss',this.expenses)
        return transformedExpenses
      })
      // .catch((error: Response) => {
      //   this.errorService.handleError(error.json())
      //  return Observable.throw(error.json())
      // })
      
  }

editExpense(expense: Expense){
  this.expenseIsEdit.emit(expense)
}

updateExpense(expense:Expense){
  const body = JSON.stringify(expense)
  const headers = new Headers({'Content-Type': 'application/json'})
 return this.http.patch('https://git.heroku.com/expense-tracker-torrelocascio.git/expense/'+ expense.id , body , {headers: headers})
        .map((response: Response) => response.json())
        // .catch((error: Response) => {
        //   this.errorService.handleError(error.json())
        //  return Observable.throw(error.json())
        // })
}

deleteExpense(expense: Expense){
  this.expenses.splice(this.expenses.indexOf(expense), 1);
  return this.http.delete('https://git.heroku.com/expense-tracker-torrelocascio.git/'+ expense.id)
  .map((response: Response) => response.json())
  // .catch((error: Response) => {
  //   this.errorService.handleError(error.json())
  //  return Observable.throw(error.json())
  // })
}


}
