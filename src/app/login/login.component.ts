import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  registerForm : FormGroup;
  
  constructor(){
    this.registerForm = new FormGroup({
      username : new FormControl('', [Validators.required, Validators.minLength(3)]),
      password : new FormControl('', [Validators.required, Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')]),
    })
  }

  handleSubmitForm(){
    if(this.registerForm.invalid){
      this.registerForm.markAllAsTouched();
    }
    console.log(this.registerForm)
  }

}
