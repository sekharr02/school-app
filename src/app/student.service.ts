import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  getstudents():Observable<any>{
   return this.http.get("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students")
  }

  createstudent(data:any):Observable<any>{
    return this.http.post("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students",data)
   }

   delete(id:any):Observable<any>{
    return this.http.delete('https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students/'+id)
  }
  getfilterstudent(term:any):Observable<any>{
    return this.http.get('https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students?filter='+term)

  }
}
