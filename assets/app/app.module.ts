import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppComponent } from "./app.component";
import { CustomerComponent } from './customers/customer.component';

@NgModule({
    declarations: [
        AppComponent,
        CustomerComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}