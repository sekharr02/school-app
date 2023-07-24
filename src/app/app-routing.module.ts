import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authenticationGuard } from './authentication.guard';
import { HomeComponent } from './home/home.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { AllStudentsComponent } from './all-students/all-students.component';
import { notifyGuard } from './notify.guard';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[authenticationGuard],children:[
    {path:'home',component:HomeComponent},
    {path:'createstudent',component:CreateStudentComponent,canDeactivate:[notifyGuard]},
    {path:'edit/:id', component:CreateStudentComponent},
    {path:'allstudent',component:AllStudentsComponent},
    {path:'studentdetail/:id',component:StudentComponent}
  ]},
  {path:'',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
