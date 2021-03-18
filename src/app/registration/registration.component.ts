import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  accno="";
  uname="";
  pswd="";

  constructor(private dataservice:DataService,private router:Router) { }

  ngOnInit(): void {
  }
    register(){
      alert("registration sucessful");
     var result= this.dataservice.register(this.accno,this.uname,this.pswd)
      if(result){
        this.router.navigateByUrl("")
      }
      

    }
  

}
