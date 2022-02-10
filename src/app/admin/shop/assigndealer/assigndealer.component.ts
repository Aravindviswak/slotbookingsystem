import { Component, OnInit } from '@angular/core';
import { AssigndtosService } from './assigndtos.service';
import { Assignentity } from './assignentity';

@Component({
  selector: 'app-assigndealer',

  templateUrl: './assigndealer.component.html',
  styleUrls: ['./assigndealer.component.css']
})
export class AssigndealerComponent implements OnInit {
  assign !:Assignentity;


  
  constructor(private ss:AssigndtosService) { this.assign=new Assignentity(); }

  ngOnInit(): void {
  }
  assigndealer(){
    var result=this.ss.asignshop(this.assign);

    result.subscribe(data=>console.log(data));


  }

}
