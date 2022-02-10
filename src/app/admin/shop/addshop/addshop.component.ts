import { Component, OnInit } from '@angular/core';
import { ShopdetailsService } from '../showshops/shopdetails.service';
import { ShopdetalsService } from './shopdetals.service';
import { Shopentity } from './shopentity';



@Component({
  selector: 'app-addshop',
  templateUrl: './addshop.component.html',
  styleUrls: ['./addshop.component.css']
})
export class AddshopComponent implements OnInit {

  AddDetails=new Shopentity();
  constructor(private ss:ShopdetalsService) { }

  ngOnInit(): void {
  }
  Addshop(){
    var result=this.ss.shopdetails(this.AddDetails);

                result.subscribe(data=>console.log(data));
  }


}
