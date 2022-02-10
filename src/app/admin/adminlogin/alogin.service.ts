import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Adminentity } from './adminentity';

@Injectable({
  providedIn: 'root'
})
export class AloginService {
  private baseUrl="http://localhost:10012/adminLogin";
  constructor(private http:HttpClient) { }
  amlogin(admin:Adminentity){
    return  this.http.post(this.baseUrl,admin,{responseType:'text' as 'json'});


    
  }
}
