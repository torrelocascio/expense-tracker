import {Component, Input} from '@angular/core'
import {Customer} from "./customer.model"
import { CustomerService } from './customer.service';


@Component ({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
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

export class CustomerComponent {
  @Input() customer: Customer;

  constructor(private customerService: CustomerService){}

  onEdit(){
    this.customerService.editCustomer(this.customer)

  }

  onDelete(){
    this.customerService.deleteCustomer(this.customer)
      .subscribe(
        result => console.log(result)
      )
  }
}

