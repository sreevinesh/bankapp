import { analyzeAndValidateNgModules, analyzeFile } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  accountDetails: any = {
    1000: { accno: 1000, name: "userone", balance: 5000, password: "user1" },
    1002: { accno: 1002, name: "usertwo", balance: 5000, password: "user2" },
    1003: { accno: 1003, name: "userthree", balance: 7000, password: "user3" },
    1004: { accno: 1004, name: "userfour", balance: 5000, password: "user4" },
    1005: { accno: 1005, name: "userfive", balance: 3000, password: "user5" },
  }
  currentUser: any;


  constructor(private router: Router) {
   this.getDetails();
  }

  saveDetails() {
    localStorage.setItem("accountDetails", JSON.stringify(this.accountDetails))
    if (this.currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(this.currentUser))
    }
  }
  getDetails() {
    if (localStorage.getItem("accountDetails")) {
      this.accountDetails = JSON.parse(localStorage.getItem("accountDetails")|| '')
    }
    if (localStorage.getItem("currentUser")) {
      {
        this.currentUser = JSON.parse(localStorage.getItem("currentUser")||'')
      }

    }
  }



  deposit(accno: any, pswd: any, amt: any) {
    //this.getDetails()
    if (accno in this.accountDetails) {
      var pswd1 = this.accountDetails[accno].password
      if (pswd1 == pswd) {
        var bal = parseInt(amt)
        this.accountDetails[accno].balance += bal
        this.saveDetails()
        alert("amount credicted.new balance:" + this.accountDetails[accno].balance)


      }
      else {
        alert("invalid password")

      }
    }
    else {

      alert("invalid user")


    }




  }
  withdraw(accno: any, pswd: any, amt: any) {
    //this.getDetails()
    if (accno in this.accountDetails) {
      var pswd1 = this.accountDetails[accno].password
      console.log(pswd);

      if (pswd1 == pswd) {
        var amd = parseInt(amt)
        if (amd >= this.accountDetails[accno].balance) {
          alert("insufficient balance")
        }
        else {
          this.accountDetails[accno].balance -= amd
          alert("amount debited" + this.accountDetails[accno].balance)
          this.saveDetails()
        }

      }
      else {
        alert("hgguy")
      }
    }
  }

  Login(accno: any, pswd: any) {
    //this.getDetails()
    console.log(this.accountDetails);
    
    if (accno in this.accountDetails) {
      var pswd1 = this.accountDetails[accno].password
      if (pswd1 == pswd) {
        this.currentUser=this.accountDetails[accno].name
        this.saveDetails()
        alert("login sucess");
        this.router.navigateByUrl("dashboard")
      }
      else {
        alert("incorrect password");
      }
    }
    else {
      alert("no user exist");
    }
  }
register(accno: any, name: any, password: any){
  //this.getDetails()
  if (accno in this.accountDetails) {
    alert("user already exist")
   // return false;
    this.router.navigateByUrl("")
  }
  else {
    this.accountDetails[accno] = {
      accno,
      balance: 0,
      name,
      password
    }
    this.saveDetails()
    this.router.navigateByUrl("")
    //return true;


  }
}
}