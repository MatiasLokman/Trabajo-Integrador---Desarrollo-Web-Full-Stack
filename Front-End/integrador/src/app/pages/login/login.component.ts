import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private __service: ServiceService) { }

  ngOnInit(): void {
    this.__service.getUsers().subscribe((res)=>{
      console.log(res);
    });

  }

  login(){
    //window.location.href = "/signup"
  }

}
