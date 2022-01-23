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

  constructor(private formBuilder: FormBuilder) {
    this.newUser = this.formBuilder.group({
      first_name: ['', Validators.required],
      second_name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      repeat_password: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  clearNewUser(): void {
    this.newUser = this.formBuilder.group({
      first_name: ['', Validators.required],
      second_name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      repeat_password: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  ValidatorNewUser(userData: User): void {
    this.newUser = this.formBuilder.group({
      first_name: [userData.first_name, Validators.required],
      second_name: [userData.second_name, Validators.required],
      username: [userData.username, Validators.required],
      password: [userData.password, Validators.required],
      repeat_password: [userData.repeat_password, Validators.required],
      country: [userData.country, Validators.required],
      city: [userData.city, Validators.required],
    });
  }

  signup(event: Event){
    event.preventDefault();

    const form = this.newUser;
    const user = form.value;

    if(form.valid){
      console.log(user);
      this.clearNewUser();
    }
  }

}
