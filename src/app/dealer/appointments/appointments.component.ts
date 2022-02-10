import { Component, OnInit } from '@angular/core';
import { SlotdetailsService } from './slotdetails.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  slotdetails:any=[];
  constructor(private ss:SlotdetailsService) { }

  ngOnInit(): void {
    this.shoeslots()
  }
  shoeslots(){
    var result=this.ss.details().then(response=>response.toPromise());
    result.then(dd=>this.slotdetails=dd);
  }

}
