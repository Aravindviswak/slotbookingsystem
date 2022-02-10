import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dealerentity } from './dealerentity';

@Injectable({
  providedIn: 'root'
})
export class DealerdetailsService {
  private baseUrl="http://localhost:10012/AddDealer"

  constructor(private http:HttpClient) { }

  dealeradd(dealer:Dealerentity){
    return this.http.post(this.baseUrl,dealer,{responseType:'text' as 'json'});

  }


}

