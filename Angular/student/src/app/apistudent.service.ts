import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApistudentService {

  title = 'Student';
  students:any[]=[]
  constructor(){

    this.students=[
      {id:1,name:'Rohit',branch:'IT'},
      {id:2,name:'Dhruva',branch:'CSE'},
      {id:3,name:'Rishi',branch:'IT'}
    ]
  }
  
  getStudents(){
    return this.students
  }
  deleteStudent(id:any){
    this.students=this.students.filter(student=>student.id!=id)
  }
  addStudent(id:any,name:any,branch:any){
    this.students.push({id:id,name:name,branch:branch})
  }
  
  updateStudent(updatedStudent:any){
    const index=this.students.findIndex(student=>student.id===updatedStudent.id);
    this.students[index]=updatedStudent;
  }
}
