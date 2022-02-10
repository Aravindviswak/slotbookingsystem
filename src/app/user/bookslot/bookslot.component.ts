import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SlotbookService } from './slotbook.service';

import { Slotentity } from './slotentity';

@Component({
  selector: 'app-bookslot',
  templateUrl: './bookslot.component.html',
  styleUrls: ['./bookslot.component.css']
})
export class BookslotComponent implements OnInit {
  slot=new Slotentity();
  constructor(private ss:SlotbookService) { }

  ngOnInit(): void {
  }
  
  
 slotbook(){
  var result=this.ss.bookslot(this.slot);

  result.subscribe(data=>console.log(data));
 }

}
