import { HttpClient, HttpClientModule } from '@angular/common/http';
import { analyzeAndValidateNgModules, analyzeFile } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

const options={
  withCredentials:true
}


@Injectable({
  providedIn: 'root'
})
export class DataService {
  // accountDetails: any = {
  //   1000: { accno: 1000, name: "userone", balance: 5000, password: "user1" },
  //   1002: { accno: 1002, name: "usertwo", balance: 5000, password: "user2" },
  //   1003: { accno: 1003, name: "userthree", balance: 7000, password: "user3" },
  //   1004: { accno: 1004, name: "userfour", balance: 5000, password: "user4" },
  //   1005: { accno: 1005, name: "userfive", balance: 3000, password: "user5" },
  // }
  currentUser: any;


  constructor(private router: Router, private http:HttpClient) {
    //this.getDetails();
  }

  // saveDetails() {
  //   localStorage.setItem("accountDetails", JSON.stringify(this.accountDetails))
  //   if (this.currentUser) {
  //     localStorage.setItem("currentUser", JSON.stringify(this.currentUser))
  //   }
  // }
  // getDetails() {
  //   if (localStorage.getItem("accountDetails")) {
  //     this.accountDetails = JSON.parse(localStorage.getItem("accountDetails") || '')
  //   }
  //   if (localStorage.getItem("currentUser")) {
  //     {
  //       this.currentUser = JSON.parse(localStorage.getItem("currentUser") || '')
  //     }

  //   }
  // }



  deposit(accno: any, pswd: any, amt: any) {
    const data = {
      accno,
      password:pswd,
      amt
    }
    console.log(accno);
    console.log(pswd);
    
    console.log("data="+data);
    
    return this.http.post("http://localhost:3000/deposit",data,options)
    // //this.getDetails()
    // if (accno in this.accountDetails) {
    //   var pswd1 = this.accountDetails[accno].password
    //   if (pswd1 == pswd) {
    //     var bal = parseInt(amt)
    //     this.accountDetails[accno].balance += bal
    //     this.saveDetails()
    //     alert("amount credicted.new balance:" + this.accountDetails[accno].balance)


    //   }
    //   else {
    //     alert("invalid password")

    //   }
    // }
    // else {

    //   alert("invalid user")


    // }




  }

  withdraw(accno: any, pswd: any, amt: any) {
    const data = {
      accno,
      password:pswd,
      amt
    }
    return this.http.post("http://localhost:3000/withdraw",data,options)
    // //this.getDetails()
    // if (accno in this.accountDetails) {
    //   var pswd1 = this.accountDetails[accno].password
    //   console.log(pswd);

    //   if (pswd1 == pswd) {
    //     var amd = parseInt(amt)
    //     if (amd >= this.accountDetails[accno].balance) {
    //       alert("insufficient balance")
    //     }
    //     else {
    //       this.accountDetails[accno].balance -= amd
    //       alert("amount debited" + this.accountDetails[accno].balance)
    //       this.saveDetails()
    //     }

    //   }
    //   else {
    //     alert("hgguy")
    //   }
    // }
  }

  Login(accno: any, pswd: any) {
    const data = {
      accno,
      password:pswd
    }
    return this.http.post("http://localhost:3000/login", data,options)


    // //this.getDetails()
    // console.log(this.accountDetails);

    // if (accno in this.accountDetails) {
    //   var pswd1 = this.accountDetails[accno].password
    //   if (pswd1 == pswd) {
    //     this.currentUser = this.accountDetails[accno].name
    //     this.saveDetails()
    //     alert("login sucess");
    //     this.router.navigateByUrl("dashboard")
    //   }
    //   else {
    //     alert("incorrect password");
    //   }
    // }    http://localhost:4200/
    // else {
    //   alert("no user exist");
    // }http://localhost:4200/http://localhost:4200/    http://localhost:4200/
  }
  register(accno: any, name: any, password: any) {

    const data = {
      accno,
      balance: 0,
      name,
      password
    }
    return this.http.post("http://localhost:3000/register", data)

    //   //this.getDetails()
    //   if (accno in this.accountDetails) {
    //     alert("user already exist,please log in")
    //    // return false;
    //     this.router.navigateByUrl("")
    //   }
    //   else {

    //     this.saveDetails()
    //     this.router.navigateByUrl("")
    //     //return true;


    //   }
    // }
  }
}