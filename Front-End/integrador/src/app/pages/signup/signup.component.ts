import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public countries = ["Argentina", "Brazil", "Chile"]
  public cities = ["Cordoba", "Bs As", "Tucuman"]
  public newUser: FormGroup;
  public validPass: boolean = false;
  public flagMsgPass: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.newUser = this.formBuilder.group({
      first_name: [''],
      second_name: [''],
      username: [''],
      password: [''],
      repeat_password: [''],
      country: [''],
      city: [''],
    })
  }

  ngOnInit(): void {
  }

  clearNewUser(): void {
    this.newUser = this.formBuilder.group({
      first_name: [''],
      second_name: [''],
      username: [''],
      password: [''],
      repeat_password: [''],
      country: [''],
      city: [''],
    });
    this.validPass = false;
    this.flagMsgPass = false;
  }

  ValidatorNewUser(userData: User): void {
    console.log(this.validPass);
    if(this.newUser.value.password === this.newUser.value.repeat_password){
      this.validPass = true
    } else{
      this.flagMsgPass = true;
    }
    this.newUser = this.formBuilder.group({
      first_name: [this.newUser.value.first_name, Validators.required],
      second_name: [this.newUser.value.second_name, Validators.required],
      username: [this.newUser.value.username, Validators.required],
      password: [this.newUser.value.password, Validators.required],
      repeat_password: [this.newUser.value.repeat_password, Validators.required],
      country: [this.newUser.value.country, Validators.required],
      city: [this.newUser.value.city, Validators.required],
    });
  }

  // ValidatorNewUser(userData: User): void {
  //   this.newUser = this.formBuilder.group({
  //     first_name: [userData.first_name, Validators.required],
  //     second_name: [userData.second_name, Validators.required],
  //     username: [userData.username, Validators.required],
  //     password: [userData.password, Validators.required],
  //     repeat_password: [userData.repeat_password, Validators.required],
  //     country: [userData.country, Validators.required],
  //     city: [userData.city, Validators.required],
  //   });
  // }

  signup(event: Event){
    event.preventDefault();

    this.ValidatorNewUser(this.newUser.value)

    if(this.newUser.valid && this.validPass){
        console.log(this.newUser.value);
        this.clearNewUser()
    }
  }
}
