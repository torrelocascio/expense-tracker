import { Component } from '@angular/core';
import {CustomerService} from "./customers/customer.service";
import { ProjectService } from './project/project.service';
import { ExpenseService } from './expenses/expense.service';


@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [CustomerService, ProjectService, ExpenseService]

})
export class AppComponent {
    }