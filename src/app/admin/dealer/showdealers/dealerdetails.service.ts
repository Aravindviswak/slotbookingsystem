import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DealerdetailsService {

  constructor( private http:HttpClient) { }
  async detais(){
    return await this.http.get("http://localhost:10012/ShowDealers");
  }
}
