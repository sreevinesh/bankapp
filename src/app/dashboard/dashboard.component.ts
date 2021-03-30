import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  accno=""
  pswd=""
  amt=""
  name=this.dataservice.currentUser
  
  depositform=this.fb.group({
    accno:['',[Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
    amt:['',[Validators.required,Validators.pattern('[0-9]*')]]

  })

  withdrawform=this.fb.group({
    accno:['',[Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
    amt:['',[Validators.required,Validators.pattern('[0-9]*')]]

  })

  constructor(private router:Router,private dataservice:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  deposit(){
    this.dataservice.deposit(this.depositform.value.accno,this.depositform.value.pswd,this.depositform.value.amt)
  }

  withdraw(){
    this.dataservice.withdraw(this.withdrawform.value.accno,this.withdrawform.value.pswd,this.withdrawform.value.amt)

  }

}
