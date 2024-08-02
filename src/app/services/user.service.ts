import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 private baseurl="http://localhost:8082/api/v1/insertion";
  constructor(private http:HttpClient) { }
  onfetch():Observable<any>{
    return this.http.get<any>(this.baseurl)
  }
  onadd(user1:User):Observable<any>
  {
    return this.http.post<any>(this.baseurl, user1);
  }
  onupdate(id:number,user:User):Observable<any>{
    return this.http.put<any>(`${this.baseurl}/id/${id}`,{data:user})
  }
  ondelete(id:number):Observable<any>{
    return this.http.delete<any>(`${this.baseurl}/id/${id}`)
  }
  getbyemail(email:string):Observable<any>{
    return this.http.get<any[]>(`${this.baseurl}/search?email=${email}`)

  }
  getbyid(id:number):Observable<any>{
    return this.http.get<any[]>(`${this.baseurl}/search?id=${id}`)

  }
}
