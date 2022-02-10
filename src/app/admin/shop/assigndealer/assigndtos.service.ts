import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Assignentity } from './assignentity';

@Injectable({
  providedIn: 'root'
})
export class AssigndtosService {
  private baseUrl="http://localhost:10012/AssginDealerToShop";
  constructor(private http:HttpClient) { }
  asignshop(assign:Assignentity){
    return  this.http.post(this.baseUrl,assign,{responseType:'text' as 'json'});
  }
}
