import {Component, OnInit} from '@angular/core'
import {FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

})

export class LoginComponent implements OnInit {
  myForm: FormGroup;

  onSubmit(){
    console.log(this.myForm)
    this.myForm.reset()
  }

  ngOnInit(){
    this.myForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)

    })
  }
}