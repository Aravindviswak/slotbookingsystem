import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Editentitys } from './editentity';

@Injectable({
  providedIn: 'root'

})
export class SeditService {

  private baseUrl="http://localhost:10012/UpdateShop";
  constructor(private http:HttpClient) { }
  updateshop(updtes:Editentitys,areaCode:any):Observable<any>{
    return this.http.put(`${this.baseUrl}/${areaCode}`,updtes,{responseType :'text' as 'json'});



  }
  
}
