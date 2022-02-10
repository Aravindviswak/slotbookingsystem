import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }
  async bookservice(){
    return await this.http.get("http://localhost:10012/showSlotBookingDeatails1");
  }
}
