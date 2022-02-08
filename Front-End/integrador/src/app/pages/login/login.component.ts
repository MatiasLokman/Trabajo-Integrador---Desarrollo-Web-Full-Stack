import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";
  public jsonData: any = {};

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    
  }

  login(){
    let user = this.username
    let pass = this.password
    this.jsonData = [user, pass]
    this.loginService.postLogin(this.jsonData).subscribe((res)=>{
      console.log(res);
    });
    // window.location.href = "/signup"
  }

}
