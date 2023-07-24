import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.scss']
})
export class AllStudentsComponent {

  public students:any=[];
  public search:any=[];

  public column:any='';
  public order:any='';

  public limit:any='';
  public page:any='';


  constructor(private studentservice:StudentService,private toastr: ToastrService,private router:Router){
    studentservice.getstudents().subscribe(
      (data:any)=>{
        this.students=data
      },
      (err:any)=>{
        this.toastr.error("student form not created");
      }
    )
  }
  getstudentfilter(){
    this.studentservice.getfilterstudent(this.search).subscribe(
      (data:any)=>{
        this.students=data
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }
  getsortstudent(){
    this.studentservice.studentsort(this.column,this.order).subscribe(
      (data:any)=>{
        this.students=data;
    
      },
      (err:any)=>{
        alert("internal error")
      }
      )
  }
  getpagination(){
    this.studentservice.studentpagination(this.limit,this.page).subscribe(
      (data:any)=>{
        this.students=data
      },
      (err:any)=>{
        alert("interval server error")
      }
  
    )
  }

  view(id:any){
    this.router.navigateByUrl('dashboard/studentdetail/'+id)
  }
  edit(id:any){
    this.router.navigateByUrl('dashboard/edit/'+id)
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
