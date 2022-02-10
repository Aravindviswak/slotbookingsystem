import { Component, OnInit } from '@angular/core';
import { BookingService } from './booking.service';

@Component({
  selector: 'app-bookingdetails',
  templateUrl: './bookingdetails.component.html',
  styleUrls: ['./bookingdetails.component.css']
})
export class BookingdetailsComponent implements OnInit {

  show:any=[];
  constructor(private ss:BookingService) { }

  ngOnInit(): void {
  }

  bookingdetails(){
    var result=this.ss.bookservice().then(response=>response.toPromise());
    result.then(dd=>this.show=dd);
  }
}


