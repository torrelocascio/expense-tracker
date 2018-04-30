import {Component} from '@angular/core';

@Component({
  selector: 'app-customers',
  template: `
  <div class="container">
    <div class="row">
        <app-customer-input></app-customer-input>
      </div>
      <hr>
    <div class="row">
      <app-customer-list></app-customer-list>
    </div>
  </div>
  `
})

export class CustomersComponent{

}
