import { Component, OnInit } from '@angular/core';
import { Signupc } from './signupc';
import { SignupsService } from './signups.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user=new Signupc();
  constructor(private ss:SignupsService) { }

  ngOnInit(): void {
    // this.signUpUser();
  }
  // signup=()=>{
    //
  // }
  signUpUser()
  {
  
    var result=this.ss.signUpUser(this.user);

    result.subscribe(data=>console.log(data));
  }


}
