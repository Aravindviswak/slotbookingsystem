import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Adminentity } from './adminentity';
import { AloginService } from './alogin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  admin=new Adminentity();
  isUserError: boolean = false;
  errorMsg: string = '';
  constructor(private ss:AloginService,
    private rooter:Router) { }

  ngOnInit(): void {

    
  }
  adminlogin(){
    // this.isUserError = true;
    // var result=this.ss.amlogin(this.admin);

    //   result.subscribe((data: any) => {
    //     if (data.status === 500) {
    //       this.isUserError = true;
    //     } else {
    //       this.isUserError = false;
    //     }

    //     console.log(data);
    //   });
    //   this.rooter.navigate(["/ahome"])





    
    if (this.admin.email === undefined || this.admin.password === undefined) {
      this.isUserError = true;
      this.errorMsg = 'Please enter Username and Password.';
      return true;
    }
    try {
      this.ss.amlogin(this.admin).subscribe(
        (data: any) => {
          this.rooter.navigateByUrl('/ahome');
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



