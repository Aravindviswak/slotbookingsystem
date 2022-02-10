import { Component, OnInit } from '@angular/core';
import { EditService } from './edit.service';
import { Editentity } from './editentity';

@Component({
  selector: 'app-updatedealer',
  templateUrl: './updatedealer.component.html',

  styleUrls: ['./updatedealer.component.css']
})
export class UpdatedealerComponent implements OnInit {
  edit=new Editentity();
  
  constructor(private ss:EditService) { }

  ngOnInit(): void {
    
  }

  editdealer(){
    var result=this.ss.update(this.edit,this.edit.areaCode );
                 result.subscribe((data:any)=>console.log(data));
 
  }

}
