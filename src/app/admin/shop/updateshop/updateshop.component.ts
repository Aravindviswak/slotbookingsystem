import { Component, OnInit } from '@angular/core';
import { Editentitys } from './editentity';
import { SeditService } from './sedit.service';


@Component({
  selector: 'app-updateshop',
  templateUrl: './updateshop.component.html',
  styleUrls: ['./updateshop.component.css']
})
export class UpdateshopComponent implements OnInit {
  updtes=new Editentitys();
  constructor(private ss:SeditService) { }

  ngOnInit(): void {
  }
  editshop(){
    var result=this.ss.updateshop(this.updtes,this.updtes.areaCode );
                 result.subscribe((data:any)=>console.log(data));
 
  }
  

}

