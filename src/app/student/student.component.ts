import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  public id : any=[];

  public student:any=[];

  constructor(private activatedroute:ActivatedRoute,private studentservice:StudentService){
    activatedroute.params.subscribe(
      (data:any)=>{
        this.id=data.id;
        studentservice.student(this.id).subscribe(
          (data:any)=>{
            this.student=data;
          }
        )
      },
      (err:any)=>{
        alert("error")
      }
    )
  }

}
