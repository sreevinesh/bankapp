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

  accno = ""
  pswd = ""
  amt = ""
  name = this.dataservice.currentUser

  depositform = this.fb.group({
    accno: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]*')]],
    amt: ['', [Validators.required, Validators.pattern('[0-9]*')]]

  })

  withdrawform = this.fb.group({
    accno: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]*')]],
    amt: ['', [Validators.required, Validators.pattern('[0-9]*')]]

  })
   id="1234";
  name1:any

  constructor(private router: Router, private dataservice: DataService, private fb: FormBuilder) { this.name1=localStorage.getItem("name")
}
 
  ngOnInit(): void {
  }

  deposit() {
    if (this.depositform.valid) {
      this.dataservice.deposit(parseInt(this.depositform.value.accno), this.depositform.value.pswd, parseInt(this.depositform.value.amt))
        .subscribe((data: any) => {
          if (data) {
            alert(data.balance)
            alert("amount credited")
            // this.router.navigateByUrl("")
          }
        }, (data) => {
          alert(data.error.message);
        })

    }
    else {
      alert("invalid forms")

    }
  }

  withdraw() {
    if (this.withdrawform.valid) {
      this.dataservice.withdraw(this.withdrawform.value.accno, this.withdrawform.value.pswd, this.withdrawform.value.amt)
        .subscribe((data: any) => {
          if (data) {
            alert(data.balance)
            alert("withdraw sucessful")
            // this.router.navigateByUrl("")
          }
        }, (data) => {
          alert(data.error.message);
        })

    }
    else {
      alert("invalid forms")

    }
  }

}

