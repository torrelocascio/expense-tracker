import {Component} from '@angular/core'
import {Customer} from "./customer.model"


export class CustomerService{
  customers: Customer[] = [];

  addCustomer(customer: Customer){
    this.customers.push(customer);
  }

  getCustomer(){
    return this.customers
  }

  deleteCustomer(customer: Customer){
    this.customers.splice(this.customers.indexOf(customer), 1);
  }
}