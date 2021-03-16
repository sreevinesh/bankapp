import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  accountDetails = {
    1000: { accno: 1000, name: "userone", balance: 5000, password: "user1" },
    1002: { accno: 1002, name: "usertwo", balance: 5000, password: "user2" },
    1003: { accno: 1003, name: "userthree", balance: 7000, password: "user3" },
    1004: { accno: 1004, name: "userfour", balance: 5000, password: "user4" },
    1005: { accno: 1005, name: "userfive", balance: 3000, password: "user5" },
  }
  constructor() { }
  ngOnInit(): void {
  }
  login(){
    alert("sucess")
  }

}
