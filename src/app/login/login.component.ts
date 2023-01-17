import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { __values } from 'tslib';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  submitted = false
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  Newuser(info: NgForm) {
    // console.log(info.value);
    this.submitted = true;
    if (info.valid) {
      console.log(localStorage.getItem('user'));
      var UserDataFromLocalStorage: any = localStorage.getItem('user');
      console.log(JSON.parse(UserDataFromLocalStorage));
      var ObjToJSON = JSON.parse(UserDataFromLocalStorage);
      if (info.value.email == ObjToJSON.email && info.value.password == ObjToJSON.password) {
        this.router.navigateByUrl('/nav/home')
        alert('You have login Successfully!!!')
      }
      alert('You do not have an account please register!!!')
      this.router.navigateByUrl('/nav/register')
    }
  }
}
