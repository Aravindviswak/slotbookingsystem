import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UloginService } from './ulogin.service';
import { Userentity } from './userentity';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = new Userentity();
  isUserError: boolean = false;
  errorMsg: string = '';
  constructor(private loginservice: UloginService, private router: Router) {}

  ngOnInit(): void {}
  

  login = () => {
    if (this.user.email === undefined || this.user.password === undefined) {
      this.isUserError = true;
      this.errorMsg = 'Please enter Username and Password.';
      return true;
    }
    try {
      this.loginservice.urlogin(this.user).subscribe(
        (data: any) => {
          this.router.navigateByUrl('/userhome');
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
  };
}
