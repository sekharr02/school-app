import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.scss']
})
export class AllStudentsComponent {

  public students:any=[];


  constructor(private studentservice:StudentService,private toastr: ToastrService){
    studentservice.getstudents().subscribe(
      (data:any)=>{
        this.students=data
      },
      (err:any)=>{
        this.toastr.error("student form not created");
      }
    )
  }
  delete(id:any){
    this.studentservice.delete(id).subscribe(
      (data:any)=>{
        this.toastr.success("deleted successfully");
        location.reload();
      },
      (err:any)=>{
        this.toastr.error("not deleted");
      }
    )
  }

  

}
