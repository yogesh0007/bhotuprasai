import { Component } from '@angular/core';
import { Router, RouterModule }  from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  localStor: string;
  logged: boolean = false;
  constructor(private router: Router){}

  isloggedIn(){
    this.localStor = localStorage.getItem('user');

    if(this.localStor == 'loggedIn'){
      this.logged = true;
      return this.logged;
    }
    else
    this.logged = false;
  }

  onLogout(){
    if(confirm("Are you sure you want to logout")){
      localStorage.setItem('user', '');
      this.router.navigateByUrl('/login');
    }
  }
}
