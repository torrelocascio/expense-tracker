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
        return transformedCustomers
      })
      .catch((error: Response) => Observable.throw(error))
      
  }

editCustomer(customer: Customer){
  this.customerIsEdit.emit(customer)
}

updateCustomer(customer:Customer){
  const body = JSON.stringify(customer)
  const headers = new Headers({'Content-Type': 'application/json'})
 return this.http.patch('http://localhost:3000/customer/'+ customer.id , body , {headers: headers})
        .map((response: Response) => response.json())
        .catch((error: Response) => Observable.throw(error.json()))
}

deleteCustomer(customer: Customer){
  this.customers.splice(this.customers.indexOf(customer), 1);
  return this.http.delete('http://localhost:3000/customer/'+ customer.id)
  .map((response: Response) => response.json())
  .catch((error: Response) => Observable.throw(error.json()))
}


}
