import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Userentity } from './userentity';

@Injectable({
  providedIn: 'root'
})
export class UloginService {
  private baseUrl="http://localhost:10012/userLogin";
  constructor(private http:HttpClient) { }
  urlogin(user:Userentity){
    return this.http.post(this.baseUrl,user,{responseType:'text' as 'json'})

  }
}
