import {Component, OnInit} from '@angular/core'
import {CustomerService} from "./customer.service"
import {Customer} from "./customer.model"
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-customer-input',
  templateUrl: './customer-input.component.html'

})


export class CustomerInputComponent implements OnInit{

  customer: Customer;

  constructor(private customerService: CustomerService){}

  onSubmit(form: NgForm){
    // if (this.customer){
    //   this.customer.name = form.value.name;
    //   this.customerService.updateCustomer(this.customer)
    //   .subscribe(
    //     result => console.log(result)
    //   )
    //   this.customer = null
    // } else {
const customer = new Customer(form.value.name);
this.customerService.addCustomer(customer)
    .subscribe(
      data => console.log('Added Customer Data',data),
      error => console.log(error),

    )
    form.resetForm()
  }

  onSubmitEdit(form: NgForm){
        if (this.customer){
      this.customer.name = form.value.name;
      this.customerService.updateCustomer(this.customer)
      .subscribe(
        result => console.log('result on submitedit for customer',result)
      )
      this.customer = null
      
  }
}

  onClear(form: NgForm){
    this.customer=null
    form.resetForm
  }
  ngOnInit(){
    this.customerService.customerIsEdit.subscribe(
      (customer: Customer) => this.customer = customer
    )
  }
}