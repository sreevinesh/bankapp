import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  accountDetails:any = {
    1000: { accno: 1000, name: "userone", balance: 5000, password: "user1" },
    1002: { accno: 1002, name: "usertwo", balance: 5000, password: "user2" },
    1003: { accno: 1003, name: "userthree", balance: 7000, password: "user3" },
    1004: { accno: 1004, name: "userfour", balance: 5000, password: "user4" },
    1005: { accno: 1005, name: "userfive", balance: 3000, password: "user5" },
  }
  aim="haiii";
  accno="enter your uname";
  pswd="";
  constructor(private router:Router) { }
  ngOnInit(): void {
  }
  getUsername(event:any){
    this.accno=event.target.value;
    console.log(this.accno);
    

  }
  pswdChange(event:any){
    this.pswd=event.target.value;
  }
  login(){

    var accNumber=this.accno;
    var pswd=this.pswd;
    let dataset = this.accountDetails;
    if(accNumber in dataset){
      var pswd1=dataset[accNumber].password
      if(pswd1==pswd){
        alert("login sucess");
        this.router.navigateByUrl("dashboard")
      }
      else{
        alert("incorrect password");
      }
    }
    else{
      alert("no user exist");
    }
  }
}

//         let us= document.querySelector("#pswd").value;

//         let data = Bank.getAccountDetails()
//         if (accno in data) {
//             if (pwd == data[accno]["password"]) {
//                 alert("authendication sucess")
//                 window.location.href = "userhome.html"

//             }
//             else {
//                 alert("invalid password");
//             }

//         }
//         else {
//             alert("accno");
//         }
//   }

// }
