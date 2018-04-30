import {Http, Response, Headers} from '@angular/http'
import {Injectable, EventEmitter} from "@angular/core"
import 'rxjs/Rx'
import {Observable} from 'rxjs'


import {Customer} from "./customer.model"

@Injectable()

export class CustomerService{
  customers: Customer[] = [];
  customerIsEdit = new EventEmitter<Customer>()
  
  constructor(private http: Http) {}

  addCustomer(customer: Customer){
    const body = JSON.stringify(customer)
    const headers = new Headers({'Content-Type': 'application/json'})
   return this.http.post('http://localhost:3000/customer',body, {headers: headers})
          .map((response: any) => {
            const result = response.json()
            const customer = new Customer(result.obj.name,result.obj._id)
            this.customers.push(customer)
            return customer
          })
         
          .catch((error: any) => Observable.throw(error.json()))
  }

  getCustomers(){
    return this.http.get('http://localhost:3000/customer')
      .map((response:Response)=> {
        const customers = response.json().obj;
        let transformedCustomers: Customer[] = [];
        for(let customer of customers) {
          transformedCustomers.push(new Customer(customer.name, customer._id))
        }
        this.customers = transformedCustomers
        console.log(transformedCustomers)
        return transformedCustomers
      })
      .catch((error: Response) => Observable.throw(error))
      
  }

  deleteCustomer(customer: Customer){
    this.customers.splice(this.customers.indexOf(customer), 1);
  }


editCustomer(customer: Customer){
  this.customerIsEdit.emit(customer)
}

updateCustomer(customer:Customer){
  this.customers.push(customer);
  const body = JSON.stringify(customer)
  const headers = new Headers({'Content-Type': 'application/json'})
 return this.http.patch('http://localhost:3000/customer/'+ customer.id , body , {headers: headers})
        .map((response: any) => response.json())
        .catch((error: any) => Observable.throw(error.json()))
}

}
