import {Component, Input, Output, EventEmitter} from '@angular/core'
import {Customer} from "./customer.model"

@Component ({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styles: [`
  .author {
      display: inline-block;
      font-style: italic;
      font-size: 12px;
      width: 80%;
  }
  .config {
      display: inline-block;
      text-align:right;
      font-size: 12px;
      width: 19%l
  }
`]

})

export class CustomerComponent {
  @Input() customer: Customer;
  @Output() editClicked = new EventEmitter<string>();

  onEdit(){
    alert('YEEEE')
    this.editClicked.emit('A New Value')
  }
}