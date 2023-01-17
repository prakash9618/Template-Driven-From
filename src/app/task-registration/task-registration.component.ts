import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-registration',
  templateUrl: './task-registration.component.html',
  styleUrls: ['./task-registration.component.css']
})
export class TaskRegistrationComponent implements OnInit {
  registerFrom: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.registerFrom = this.fb.group({
      firstname: new FormControl('', [Validators.required, Validators.pattern('^[a-z,A-Z]{3,15}$')]),
      lastname: new FormControl('', [Validators.required, Validators.pattern('^[a-z,A-Z]{3,50}$')]),
    })
  }

  ngOnInit(): void {
  }
  registerSubmit() {

  }
}
