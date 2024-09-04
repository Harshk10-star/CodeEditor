import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'login-screen',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  inputValue: string = '';

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(1)]),
    password: new FormControl('',[Validators.required, Validators.minLength(1)])
  })

  onSubmit(): void {
    if(this.loginForm.valid) {
      console.log("valid");
      
    }
  }
}

