import {Http, Response, Headers} from '@angular/http'
import {Injectable, EventEmitter} from "@angular/core"
import 'rxjs/Rx'
import {Observable} from 'rxjs'


import {Customer} from "./customer.model"
import { ErrorService } from '../errors/error.service';

@Injectable()

export class CustomerService{
  customers: Customer[] = [];
  customerIsEdit = new EventEmitter<Customer>()
  
  constructor(private http: Http, private errorService: ErrorService) {}

  addCustomer(customer: Customer){
    const body = JSON.stringify(customer)
    const headers = new Headers({'Content-Type': 'application/json'})
   return this.http.post('https://localhost:3000/customer',body, {headers: headers})
          .map((response: any) => {
            const result = response.json()
            const customer = new Customer(result.obj.name,null,result.obj._id)
            this.customers.push(customer)
            console.log("HERE In Add Customer")
            return customer
          })
         
          // .catch((error: Response) => {
          //   console.log("ERROR IN ADD")
          //   this.errorService.handleError(error.json())
          //  return Observable.throw(error.json())
          // })
  }

  getCustomers(){
    return this.http.get('https://localhost:3000/customer')
      .map((response:Response)=> {
        console.log('======response.json.obj in getCustomers',response.json().obj)
        const customers = response.json().obj;
        let transformedCustomers: Customer[] = [];
        for(let customer of customers) {
          transformedCustomers.push(new Customer(customer.name, customer.projects, customer._id))
        }
        this.customers = transformedCustomers
        return transformedCustomers
      })
      // .catch((error: Response) => {
      //   this.errorService.handleError(error.json())
      //  return Observable.throw(error.json())
      // })
      
  }

editCustomer(customer: Customer){
  this.customerIsEdit.emit(customer)
}

updateCustomer(customer:Customer){
  const body = JSON.stringify(customer)
  const headers = new Headers({'Content-Type': 'application/json'})
 return this.http.patch('https://localhost:3000/customer/'+ customer.id , body , {headers: headers})
        .map((response: Response) => response.json())
        // .catch((error: Response) => {
        //   this.errorService.handleError(error.json())
        //  return Observable.throw(error.json())
        // })
}

deleteCustomer(customer: Customer){
  this.customers.splice(this.customers.indexOf(customer), 1);
  return this.http.delete('https://localhost:3000/customer/'+ customer.id)
  .map((response: Response) => response.json())
  // .catch((error: Response) => {
  //   this.errorService.handleError(error.json())
  //  return Observable.throw(error.json())
  // })
}


}
