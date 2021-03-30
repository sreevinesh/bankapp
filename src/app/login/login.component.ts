import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  accno="";
  pswd="";
  

  loginform=this.fb.group({
    accno:['',[Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.pattern("[0-9]*")]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]

  })
  constructor(private router:Router,private dataservice:DataService,private fb:FormBuilder) { }
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
    if(this.loginform.valid){
      var accno=this.loginform.value.accno
      //console.log(accno);
      var pswd=this.loginform.value.pswd
     // console.log(pswd);
      var result=this.dataservice.Login(this.loginform.value.accno,this.loginform.value.pswd)
      


      
    }
  }
}

//     var accNumber=this.loginform.value.accno;
//     var pswd=this.loginform.value.pswd;
//     let dataset = this.dataservice.accountDetails;
//     if(accNumber in dataset){
//       var pswd1=dataset[accNumber].password
//       if(pswd1==pswd){
//         alert("login sucess");
//         this.router.navigateByUrl("dashboard")
//       }
//       else{
//         alert("incorrect password");
//       }
//     }
//     else{
//       alert("no user exist");
//     }
//   }
// }

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
