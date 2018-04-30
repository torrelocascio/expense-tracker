import {Component} from '@angular/core'
import {Expense} from "./expense.model"


export class ExpenseService{
  expenses: Expense[] = [
    new Expense('Expense A'),
    new Expense ('Expense B')
  ];

  addExpense(expense: Expense){
    this.expenses.push(expense);
    console.log(expense)
  }

  getExpenses(){
    return this.expenses
  }

  deleteExpense(expense: Expense){
    this.expenses.splice(this.expenses.indexOf(expense), 1);
  }
}