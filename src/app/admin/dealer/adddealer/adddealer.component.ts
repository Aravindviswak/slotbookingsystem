import { Component, OnInit } from '@angular/core';
import { DealerdetailsService } from './dealerdetails.service';
import { Dealerentity } from './dealerentity';

@Component({
  selector: 'app-adddealer',
  templateUrl: './adddealer.component.html',
  styleUrls: ['./adddealer.component.css']
})
export class AdddealerComponent implements OnInit {

  dealer=new Dealerentity();
  constructor(private sss:DealerdetailsService) { }


  ngOnInit(): void {
  }
  adddealer(){
    var result=this.sss.dealeradd(this.dealer);

    result.subscribe(data=>console.log(data));
  }


}
