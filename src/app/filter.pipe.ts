import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(student: any, SearchStudent: any) {
    if (!SearchStudent) {
      return student;
    }
    return student.filter((res: any) => {
      // console.log(res.name);
      return res.id.toLowerCase().includes(SearchStudent.toLowerCase()),
        res.name.toLowerCase().includes(SearchStudent.toLowerCase()),
        res.age.toLowerCase().includes(SearchStudent.toLowerCase())
    })
  }

}
