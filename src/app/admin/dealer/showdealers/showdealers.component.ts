import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DealerdetailsService } from './dealerdetails.service';

@Component({
  selector: 'app-showdealers',
  templateUrl: './showdealers.component.html',
  styleUrls: ['./showdealers.component.css']
})
export class ShowdealersComponent implements OnInit {


  Dealerdetails:any=[];
  constructor(private ss:DealerdetailsService) { }

  ngOnInit(): void {
    this.showdealer();

    }
    showdealer(){
      var result=this.ss.detais().then(response=>response.toPromise());
      result.then(dd=>this.Dealerdetails=dd);
    }
    // var result=this._service.registerUserFromRemote(this.user);
    //              result.subscribe(data=>console.log(data));


}
//this.Dealerdetails=response
