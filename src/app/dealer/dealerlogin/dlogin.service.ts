import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dealerentity } from 'src/app/admin/dealer/adddealer/dealerentity';

@Injectable({
  providedIn: 'root'
})
export class DloginService {
  private baseUrl="http://localhost:10012/DealerLogin";
  constructor(private http:HttpClient) { }
  dllogin(dealer:Dealerentity){
    return  this.http.post(this.baseUrl,dealer,{responseType:'text' as 'json'});

  }
}
