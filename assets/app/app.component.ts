import { Component } from '@angular/core';
import {Customer} from "./customers/customer.model"

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',

})
export class AppComponent {
    customer: Customer = new Customer('Customer A');
}