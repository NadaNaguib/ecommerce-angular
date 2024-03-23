import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm : FormGroup;
  
  constructor(){
    this.registerForm = new FormGroup({
      name : new FormControl('', [Validators.required, Validators.minLength(3)]),
      email : new FormControl('', [Validators.required, Validators.email]),
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
