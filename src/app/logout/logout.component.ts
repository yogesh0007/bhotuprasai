import { Component } from '@angular/core';
import { Http } 						from '@angular/http';
import {DataService}  from '../services/data.service';
import { Router, RouterModule }  from '@angular/router';

@Component({
  selector: 'login-component',
  templateUrl: `
  <div class="container">
  <div class="row"><button class="btn btn-danger" (click)="onLogout()">Logout</button></div>
  </div>
  `,
})

export class LogoutComponent {
  constructor(private router: Router){}

  onLogout(){
    localStorage.setItem('user', '');
    this.router.navigateByUrl('/login');
  }
}
