import {Component} from '@angular/core'

@Component({
  selector: 'app-header',
  template: `
  <header class="row">
    <nav class="col-md-8 col-md-offset-2">
    <h1>The Expense Tracker</h1>
    <br>
      <ul class="nav nav-pills">
        <li routerLinkActive="active">
          <a [routerLink]="['/customers']"> Customers</a> 
        </li>
        <li routerLinkActive="active">
          <a [routerLink]="['/auth']"> Authentication</a> 
        </li>
        <li routerLinkActive="active">
          <a [routerLink]="['/projects']"> Projects </a>  
        </li>
        <li routerLinkActive="active">
          <a [routerLink]="['/expenses']"> Expenses </a>  
        </li>
      </ul>
    </nav>
  </header>
  `
})

export class HeaderComponent {

}