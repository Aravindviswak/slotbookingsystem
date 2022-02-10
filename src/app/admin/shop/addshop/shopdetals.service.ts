import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Shopentity } from './shopentity';

@Injectable({
  providedIn: 'root'
})
export class ShopdetalsService {
  private baseUrl="http://localhost:10012/AddShop";
  constructor(private http:HttpClient) { }

  shopdetails(AddDetails:Shopentity){
    return this.http.post(this.baseUrl,AddDetails,{responseType:'text' as 'json'});
  }
}



