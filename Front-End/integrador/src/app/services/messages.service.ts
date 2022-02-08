import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private urlBase = "http://localhost:3000/"

  constructor(private http: HttpClient, private router: Router) {  }

  getUsers(){
      console.log(this.http.get(this.urlBase));
      return this.http.get(this.urlBase + "api/users");
  }

  getMessages(id_user: number){
    
  }

  postMessages(){

  }

  deleteMessage(){

  }
}
