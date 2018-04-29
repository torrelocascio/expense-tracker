import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'



import { AppComponent } from "./app.component";
import { CustomerComponent } from './customers/customer.component';
import { CustomerListComponent } from './customers/customer-list.component';
import { CustomerInputComponent } from './customers/customer-input.component';

@NgModule({
    declarations: [
        AppComponent,
        CustomerComponent,
        CustomerListComponent,
        CustomerInputComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}