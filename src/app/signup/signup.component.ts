import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {DataService}  from '../services/data.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'signup-comp',
  templateUrl: './signup.component.html'
})

export class SignUpComponent{
  private users = [];
  private infoMsg = { body: "", type: "info"};

  constructor(private http: Http,
              private router: Router,
              private dataService: DataService,
              private formBuilder: FormBuilder) { }
  addUser(form: any) {
    this.dataService.addUser(form).subscribe(
      res => {
        var newUser = res.json();
        this.users.push(newUser);
        this.sendInfoMsg("item added successfully.", "success");
        this.router.navigateByUrl('/');
      },
      error => console.log(error)
    );
  }

  sendInfoMsg(body, type, time = 3000) {
    this.infoMsg.body = body;
    this.infoMsg.type = type;
    window.setTimeout(() => this.infoMsg.body = "", time);
  }
}
