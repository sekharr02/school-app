import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent {
  public id:any={};

  public studentform:FormGroup=new FormGroup({
    name: new FormControl(),
    class: new FormControl(),
    fathername: new FormControl(),
    email:new FormControl(),
    dob:new FormControl(),
    address:new FormGroup({
      addressline:new FormControl(),
      city:new FormControl(),
      state:new FormControl(),
      pincode:new FormControl('',[Validators.required,Validators.min(100000),Validators.max(999999)])
    }),
    cards:new FormArray([]),
    type:new FormControl(),
    busfee:new FormControl(),
    hostelfee:new FormControl()
  })

  get formarray(){
    return this.studentform.get('cards') as FormArray;
  }
  add(){
    
    this.formarray.push(
      new FormGroup({
        class:new FormControl(),
        year:new FormControl(),
        percentage:new FormControl()
      })
    )
  }

  delete(i:number){
    this.formarray.removeAt(i);
  }
  constructor(private studentservice:StudentService, private toastr: ToastrService,private activatedroute:ActivatedRoute){
    activatedroute.params.subscribe(
      (data:any)=>{
        this.id=data.id;
        studentservice.student(this.id).subscribe(
          (data:any)=>{
            this.studentform.patchValue(data)
          }
        )
      }
    )

  }

  submit(){
    console.log(this.studentform)
    if(this.id?.length>0){
      this.studentservice.edit(this.id,this.studentform.value).subscribe(
        (data:any)=>{
          this.toastr.success('vehicle updated successfully')
        },
        (err:any)=>{
          this.toastr.error('vehicle updation failed')
        }
      )
    }
    else{
    this.studentservice.createstudent(this.studentform.value).subscribe(
      (data:any)=>{
        this.toastr.success("created successfully");
      },
      (err:any)=>{
        this.toastr.error("student form not created");

      }
    )
  }
  }
}
