import { Component, OnInit } from '@angular/core';
import {  FormBuilder,  FormControl,  FormGroup,  RequiredValidator,  Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public countries = ["Argentina", "Brazil", "Chile"]
  public cities = ["Cordoba", "Bs As", "Tucuman"]
  public newUserData = FormGroup

  constructor() { }

  ngOnInit(): void {
  }

  signup(data: []){
    console.log(data)
  }

}
