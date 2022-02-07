import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  // statusMenu: boolean = false;
  iconMenu: string = "menu";
  username: string = "Santi Moreno"

  constructor() { }

  ngOnInit(): void {
  }

  // openMenu(status: boolean){
  //   this.statusMenu = status;
  //   this.iconMenu = this.statusMenu ? "arrow_back" : "menu";
  // }

}
