import {Component} from '@angular/core'
import {Customer} from './customer.model'

@Component({
  selector: 'app-customer-list',
  template: `
  <div class="col-md-8 col-md-offset-2">
    <app-customer 
      [customer]="customer" 
      (editClicked)="customer.name = $event"
      *ngFor="let customer of customers">
    </app-customer>
  </div>
  `
})

export class CustomerListComponent{
  customers: Customer[] = [
    new Customer('Customer A'),
    new Customer ('Customer B')
]
}