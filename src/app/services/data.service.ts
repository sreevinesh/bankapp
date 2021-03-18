import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  accountDetails:any = {
    1000: { accno: 1000, name: "userone", balance: 5000, password: "user1" },
    1002: { accno: 1002, name: "usertwo", balance: 5000, password: "user2" },
    1003: { accno: 1003, name: "userthree", balance: 7000, password: "user3" },
    1004: { accno: 1004, name: "userfour", balance: 5000, password: "user4" },
    1005: { accno: 1005, name: "userfive", balance: 3000, password: "user5" },
  }

  constructor() { }
  register(accno:any,name:any,password:any){
    if(accno in this.accountDetails){
      alert("user already exist")
      return false;
    }
    else{
    this.accountDetails[accno]={
      accno,
      balance:0,
      name,
      password
    }
    return true;
    
    
  }
}
}