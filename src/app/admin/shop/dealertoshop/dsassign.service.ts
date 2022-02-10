import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DsassignService {

  constructor( private http:HttpClient) { }
  async dsdetails(){
    return await this.http.get("http://localhost:10012/ShowAssginedDealerToShop");
  }

}
