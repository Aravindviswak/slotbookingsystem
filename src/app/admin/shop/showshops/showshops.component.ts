import { Component, OnInit } from '@angular/core';
import { ShopdetailsService } from './shopdetails.service';

@Component({
  selector: 'app-showshops',
  templateUrl: './showshops.component.html',
  styleUrls: ['./showshops.component.css']
})
export class ShowshopsComponent implements OnInit {

  Shopdetails:any=[];
  constructor(private ss:ShopdetailsService) { }

  ngOnInit(): void {
    
    this.showshops();
  }
  showshops(){
    var result=this.ss.details().then(response=>response.toPromise());
    result.then(dd=>this.Shopdetails=dd);
  }


}
