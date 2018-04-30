import {Routes, RouterModule} from '@angular/router'
import { CustomerListComponent } from './customers/customer-list.component';
import { AuthenticationComponent } from './auth/authentication.component';
import {AUTH_ROUTES} from './auth/auth.routes'
import { CustomersComponent } from './customers/customers.component';
import { ProjectsComponent } from './project/projects.component';
import { ExpensesComponent } from './expenses/expenses.component';

const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/customers', pathMatch: 'full'},
  {path: 'customers', component: CustomersComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'expenses', component: ExpensesComponent},
  {
    path: 'auth', 
    component: AuthenticationComponent, 
    children: AUTH_ROUTES},

];

export const routing = RouterModule.forRoot(APP_ROUTES)