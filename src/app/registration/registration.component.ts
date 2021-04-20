import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  accno = "";
  uname = "";
  pswd = "";
  registerform = this.fb.group({
    accno: ['', [Validators.required, Validators.minLength(4),  Validators.pattern("[0-9]*")]],
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor(private dataservice: DataService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  register() {
    //var result=
    if (this.registerform.valid) {
      this.dataservice.register(this.registerform.value.accno, this.registerform.value.uname, this.registerform.value.pswd)
        .subscribe(data=> {
          if (data) {
            alert("registration sucessful, please log in")
            this.router.navigateByUrl("")
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
