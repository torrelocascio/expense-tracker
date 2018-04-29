import {Component} from '@angular/core'

@Component({
  selector: 'app-customer-input',
  templateUrl: './customer-input.component.html'
})


export class CustomerInputComponent{
  onSave(value: string){
    console.log(value)

  }
}