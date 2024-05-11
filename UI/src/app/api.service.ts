import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly APIUrl = "http://127.0.0.1:8000";
  readonly PhotoUrl = "http://127.0.0.1:8000/media/";

  constructor(private http: HttpClient) { }

  getDepartmentData():Observable<any>{
    return this.http.get<any>(this.APIUrl + '/department/');
  }

  addDepartmentData(data:any){
    return this.http.post(this.APIUrl + '/department/', data);
  }

  updateDepartmentData(data:any){
    return this.http.put(this.APIUrl + '/department/', data);
  }
  
  deleteDepartmentData(data:any){
    return this.http.delete(this.APIUrl + '/departement/', data)
  }

  getEmployeeData():Observable<any>{
    return this.http.get<any>(this.APIUrl + '/employee/');
  }

  addEmployeeData(data:any){
    return this.http.post(this.APIUrl + '/employee/', data);
  }

  updateEmployeeData(data:any){
    return this.http.put(this.APIUrl + '/employee/', data);
  }
  
  deleteEmployeeData(data:any){
    return this.http.delete(this.APIUrl + '/employee/', data)
  }

  uploadFile(data:any){
    return this.http.post(this.APIUrl + '/saveFile/', data)
  }

}
