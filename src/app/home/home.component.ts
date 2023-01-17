import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Students: any = [];
  Findname: any;
  stdForm: FormGroup;
  submitted = false;
  btn :any;
  constructor(
    private localStudentData: StudentService,
    private fb: FormBuilder
  ) {
    this.stdForm = this.fb.group({
      id: new FormControl('', [Validators.required,Validators.pattern('^[0-9]{1,2}$')]),
      name: new FormControl('', [Validators.required,Validators.pattern('^[a-z,A-z]{3,50}$')]),
      age: new FormControl('', [Validators.required,Validators.pattern('^[0-9]{2,2}$')])
    })
  }

  ngOnInit(): void {
    this.getStudents();
  }
  getStudents() {
    this.localStudentData.getStudent().subscribe(res => {
      // console.log(res);
      this.Students = res;
    })
  }
  deleteStudent(student: any) {
    this.localStudentData.deleteStudent(student.id).subscribe(res => {
      this.getStudents();
    })
  }
  editstd(student:any){
    this.stdForm.patchValue(student)
  }
  dataSubmit() {
    this.submitted = true;
    if (this.stdForm.valid) {
      console.log(this.stdForm.value);
      this.localStudentData.addStudent(this.stdForm.value).subscribe(res => {
        this.getStudents();
      })
      this.localStudentData.editStudent(this.stdForm.value).subscribe( res =>{
        this.getStudents();
      })
      document.getElementById('close')?.click();
      this.stdForm.reset();
    }
  }
}

