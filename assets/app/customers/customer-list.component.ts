import {Component, OnInit} from '@angular/core'
import {Customer} from './customer.model'
import {CustomerService} from "./customer.service"


@Component({
  selector: 'app-customer-list',
  template: `
  <div class="col-md-8 col-md-offset-2">
    <app-customer 
      [customer]="customer" 
      *ngFor="let customer of customers">
    </app-customer>
  </div>
  `
})

export class CustomerListComponent implements OnInit {
  customers: Customer[] 

constructor(private customerService: CustomerService){}

ngOnInit(){
  this.customerService.getCustomers()
    .subscribe(
      (customers: Customer[]) =>{
        this.customers=customers
        }
    );
}

}