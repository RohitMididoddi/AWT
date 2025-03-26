import { Component } from '@angular/core';
import {  FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Student';
  students=[
    {id:1,name:'Rohit',branch:'IT'},
    {id:2,name:'Dhruva',branch:'CSE'},
    {id:3,name:'Rishi',branch:'IT'}
  ]
  selectedstudent:any;
  deleteStudent(id:any){
    this.students=this.students.filter(student=>student.id!=id)
  }
  addStudent(id:any,name:any,branch:any){
    this.students.push({id:id.value,name:name.value,branch:branch.value})
  }
  editStudent(student:any){
    this.selectedstudent={...student};
  }
  updateStudent(){
    const index=this.students.findIndex(student=>student.id===this.selectedstudent.id);
    this.students[index]=this.selectedstudent;
  }


}
