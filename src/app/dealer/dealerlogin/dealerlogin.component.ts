import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dealerentity } from 'src/app/admin/dealer/adddealer/dealerentity';
import { DloginService } from './dlogin.service';

@Component({
  selector: 'app-dealerlogin',
  templateUrl: './dealerlogin.component.html',
  styleUrls: ['./dealerlogin.component.css']
})
export class DealerloginComponent implements OnInit {
  dealer=new Dealerentity();
  isUserError: boolean = false;
  errorMsg: string = '';
  constructor(private ss:DloginService,
    private roote:Router) { }
  

  ngOnInit(): void {
  }
  dealerlogin(){
    // this.isUserError = true;
    // var result=this.ss.dllogin(this.dealer);

    //   result.subscribe((data: any) => {
    //     if (data.status === 500) {
    //       this.isUserError = true;
    //     } else {
    //       this.roote.navigate(["/dealerhome"])
    //       this.isUserError = false;
    //     }
        
    //     console.log(data);

    //   });

    if (this.dealer.mail_ID === undefined || this.dealer.dealer_name === undefined) {
      this.isUserError = true;
      this.errorMsg = 'Please enter Username and Password.';
      return true;
    }
    try {
      this.ss.dllogin(this.dealer).subscribe(
        (data: any) => {
          this.roote.navigateByUrl('/dealerhome');
          this.isUserError = false;
          return false;
        },
        (error) => {
          this.isUserError = true;
          this.errorMsg = 'Invalid UserId/Password';
          return false;
        }
      );
      return false;
    } catch {
      this.isUserError = true;
      this.errorMsg = 'Services are down, Please try after some time.';
      return false;
    }
  }
}

