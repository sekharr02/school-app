import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent {

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
  constructor(private studentservice:StudentService, private toastr: ToastrService){}

  submit(){
    console.log(this.studentform)
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
