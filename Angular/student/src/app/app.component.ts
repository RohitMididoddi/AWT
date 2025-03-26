import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApistudentService } from './apistudent.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'student';
  students:any;
  selectedStudent:any;
  constructor(private studentservice:ApistudentService){

  }

  ngOnInit(){
    this.fetchStudents()
  }
  fetchStudents(){

    this.students=this.studentservice.getStudents()
  }    
  deleteStudent(id:any){
     this.studentservice.deleteStudent(id)
     this.fetchStudents() 
    }
    
    addStudent(id:any,name:any,branch:any){
      this.studentservice.addStudent(id.value,name.value,branch.value)
      this.fetchStudents()
    }

    editStudent(student:any){
      this.selectedStudent={...student};
    
    }
    updateStudent(){
    
      this.studentservice.updateStudent(this.selectedStudent)
      this.fetchStudents()
      this.selectedStudent=""
    }
}

