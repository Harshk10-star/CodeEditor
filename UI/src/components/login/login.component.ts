import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'login-screen',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)])
  })
  
  onSubmit(): void {
    if(this.loginForm.valid) {
      //login
      
    }
  }
}

