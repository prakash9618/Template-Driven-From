import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private http: HttpClient,
  ) { }

  getStudent() {
   return this.http.get('http://localhost:3500/Students')
  }
  addStudent(body:any){
    return this.http.post('http://localhost:3500/Students/',body)
  }
  deleteStudent(id:any){
    return this.http.delete('http://localhost:3500/Students/'+id)
  }
  editStudent(editstd:any){
    return this.http.put('http://localhost:3500/Students/'+editstd.id,editstd)
  }
}
