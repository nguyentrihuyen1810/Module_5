import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {checkPassword} from "./register.check";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  countryList: Array<string> = ['Viet Nam', 'USA', 'Korea', 'Japan', 'Russia'];

  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      pass: new FormControl({
        password: new FormControl("", [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl("", [Validators.required, Validators.minLength(6)])
      }, checkPassword),
      country: new FormControl("", [Validators.required]),
      age: new FormControl("", [Validators.required, Validators.min(19)]),
      gender: new FormControl("", [Validators.required]),
      phone: new FormControl("",[Validators.pattern('^\\+84\\d{9,10}$')]),
    })
  }

}
