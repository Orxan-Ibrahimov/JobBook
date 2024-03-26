import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jb-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  constructor() {}
  isProfileShow:boolean = false;
  ngOnInit(): void {}



  ProfileToggle(){
    this.isProfileShow = !this.isProfileShow;
  }
}
