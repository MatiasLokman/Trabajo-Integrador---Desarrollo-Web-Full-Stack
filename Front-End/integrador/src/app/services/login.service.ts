import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private urlBase = "http://localhost:3000/"


  constructor(private http: HttpClient, private router: Router) { }


  postLogin(body: any ){
    console.log(this.http.get(this.urlBase + "api/login", body));
    return this.http.get(this.urlBase + "api/login");
  }
}
