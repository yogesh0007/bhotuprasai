import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private users = [];
  private isLoading = true;

  private user = {};
  private isEditing = false;

  private addUserForm: FormGroup;
  private name = new FormControl("", Validators.required);
  private age = new FormControl("", Validators.required);
  private weight = new FormControl("", Validators.required);

  private infoMsg = { body: "", type: "info"};

  constructor(private http: Http,
              private dataService: DataService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getUsers();

    this.addUserForm = this.formBuilder.group({
      name: this.name,
      age: this.age,
      weight: this.weight
    });
  }

  getUsers() {
    this.dataService.getUsers().subscribe(
      data => this.users = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

enableEditing(user) {
    this.isEditing = true;
    this.user = user;
    console.log(this.user);
  }

  cancelEditing() {
    this.isEditing = false;
    this.user = {};
    this.sendInfoMsg("item editing cancelled.", "warning");
    // reload the users to reset the editing
    //this.getUsers();
  }

  editUser(user) {
    this.dataService.editUser(user).subscribe(
      res => {
        this.isEditing = false;
        this.user = user;
        this.sendInfoMsg("item edited successfully.", "success");
      },
      error => console.log(error)
    );
  }

  deleteUser(user) {
    if(window.confirm("Are you sure you want to permanently delete this item?")) {
      this.dataService.deleteUser(user).subscribe(
        res => {
          var pos = this.users.map(user => { return user._id }).indexOf(user._id);
          this.users.splice(pos, 1);
          this.sendInfoMsg("item deleted successfully.", "success");
        },
        error => console.log(error)
      );
    }
  }

  sendInfoMsg(body, type, time = 3000) {
    this.infoMsg.body = body;
    this.infoMsg.type = type;
    window.setTimeout(() => this.infoMsg.body = "", time);
  }

}
