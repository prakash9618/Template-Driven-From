import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  password: string = '';
  submitted = false;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  registerSubmit(info: NgForm) {
    // console.log(info.value);
    this.submitted = true;
    if (info.valid) {
      // console.log(info.value);
      var ObjToJSON = JSON.stringify(info.value)
      console.log(JSON.stringify(info.value));
      localStorage.setItem('user', ObjToJSON)
      confirm(' ')
      this.router.navigateByUrl('/nav')
    }
  }
}
