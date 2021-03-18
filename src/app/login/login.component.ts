import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  aim="haiii";
  accno="enter your uname";
  pswd="";
  constructor(private router:Router,private dataservice:DataService) { }
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
    let dataset = this.dataservice.accountDetails;
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
