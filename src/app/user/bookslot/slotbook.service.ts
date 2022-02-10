import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Slotentity } from './slotentity';

@Injectable({
  providedIn: 'root'
})
export class SlotbookService {
  private baseUrl="http://localhost:10012/SlotBooking";
  constructor(private http:HttpClient) { }

  bookslot(slot:Slotentity){
    return this.http.post(this.baseUrl,slot,{responseType:'text' as 'json'});

  }
}
