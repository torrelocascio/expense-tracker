import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'


//Main Components
import { AppComponent } from "./app.component";
import { HeaderComponent } from './header.component';

//Customer Components
import { CustomerComponent } from './customers/customer.component';
import { CustomerListComponent } from './customers/customer-list.component';
import { CustomerInputComponent } from './customers/customer-input.component';
import { CustomersComponent } from './customers/customers.component';

//Auth Components
import { AuthenticationComponent } from './auth/authentication.component';
import { LogoutComponent } from './auth/logout.component';
import { SignupComponent } from './auth/signup.component';
import { LoginComponent } from './auth/login.component';

//Routing Components
import { routing } from './app.routing';

//Project Components
import { ProjectComponent } from './project/project.component';
import { ProjectInputComponent } from './project/project-input.component';
import { ProjectListComponent } from './project/project-list.component';
import { ProjectsComponent } from './project/projects.component';

//Expense Components

import { ExpenseComponent } from './expenses/expense.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ExpenseInputComponent } from './expenses/expense-input.component';
import { ExpenseListComponent } from './expenses/expense-list.component';

import { HttpModule } from '@angular/http';



@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,

        CustomerComponent,
        CustomerListComponent,
        CustomerInputComponent,
        CustomersComponent,

        AuthenticationComponent,
        LogoutComponent,
        SignupComponent,
        LoginComponent,

        ProjectComponent,
        ProjectInputComponent,
        ProjectListComponent,
        ProjectsComponent,

        ExpenseComponent,
        ExpenseInputComponent,
        ExpenseListComponent,
        ExpensesComponent

    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        ReactiveFormsModule,
        HttpModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}