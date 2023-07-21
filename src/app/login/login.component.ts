import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private loginservice:LoginService,private router:Router, private toastr: ToastrService){}
  public loginpage:FormGroup=new FormGroup({
    email:new FormControl(),
    password:new FormControl(),
  })
  submit(){
    console.log(this.loginpage);
    this.loginservice.getlogin(this.loginpage.value).subscribe(
      (data:any)=>{
        this.toastr.success("login successfully");
        this.router.navigateByUrl('/dashboard')
        localStorage.setItem('token',data.token);
      },
      (err:any)=>{
        this.toastr.error("login failed");
      }
    )
  }

  
  

}
