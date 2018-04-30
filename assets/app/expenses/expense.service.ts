import {Http, Response, Headers} from '@angular/http'
import {Injectable, EventEmitter} from "@angular/core"
import 'rxjs/Rx'
import {Observable} from 'rxjs'


import {Expense} from "./expense.model"
import { ErrorService } from '../errors/error.service';

@Injectable()

export class ExpenseService{
  expenses: Expense[] = [];
  expenseIsEdit = new EventEmitter<Expense>()
  
  constructor(private http: Http, private errorService: ErrorService) {}

  addExpense(expense: Expense){
    const body = JSON.stringify(expense)
    const headers = new Headers({'Content-Type': 'application/json'})
   return this.http.post('http://localhost:3000/expense',body, {headers: headers})
          .map((response: any) => {
            const result = response.json()
            const expense = new Expense(result.obj.name,result.obj._id)
            this.expenses.push(expense)
            console.log("HERE")
            return expense
          })
         
          // .catch((error: Response) => {
          //   console.log("ERROR IN ADD")
          //   this.errorService.handleError(error.json())
          //  return Observable.throw(error.json())
          // })
  }

  getExpenses(){
    return this.http.get('http://localhost:3000/expense')
      .map((response:any)=> {
        console.log("HERE IS RESPONSE",response.json().obj)
        const expenses = response.json().obj;
        let transformedExpenses: Expense[] = [];
        for(let expense of expenses) {
          transformedExpenses.push(new Expense(expense.name, expense._id))
        }
        this.expenses = transformedExpenses
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
 return this.http.patch('http://localhost:3000/expense/'+ expense.id , body , {headers: headers})
        .map((response: Response) => response.json())
        // .catch((error: Response) => {
        //   this.errorService.handleError(error.json())
        //  return Observable.throw(error.json())
        // })
}

deleteExpense(expense: Expense){
  this.expenses.splice(this.expenses.indexOf(expense), 1);
  return this.http.delete('http://localhost:3000/expense/'+ expense.id)
  .map((response: Response) => response.json())
  // .catch((error: Response) => {
  //   this.errorService.handleError(error.json())
  //  return Observable.throw(error.json())
  // })
}


}
