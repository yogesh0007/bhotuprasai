import { Component } from '@angular/core';
import { Http } 						from '@angular/http';
import {DataService}  from '../services/data.service';
import { Router, RouterModule }  from '@angular/router';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
})

export class LoginComponent {

  constructor(private _http: Http, private dataService: DataService, private router : Router){}

  onLogin(myForm: any){
    //console.log(myForm);
    this.dataService.onLogin(myForm).subscribe(res => {
      var found = res.json();
      if(found.title == 'User found'){
        localStorage.setItem('user', 'loggedIn');
        localStorage.setItem('userTotal', found);
        this.router.navigateByUrl('/');
        console.log(found);
      }
      if(found.title.indexOf('not') > -1){
        alert("Username/Password invalid");
      }
    },
    error => console.log(error)
  );
  }
}
