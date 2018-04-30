import {Component} from '@angular/core';

@Component({
  selector: 'app-expenses',
  template: `
  <div class="container">
    <div class="row">
        <app-expense-input></app-expense-input>
      </div>
      <hr>
    <div class="row">
      <app-expense-list></app-expense-list>
    </div>
  </div>
  `
})

export class ExpensesComponent{

}
