import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AhomeComponent } from './admin/ahome/ahome.component';
import { AdddealerComponent } from './admin/dealer/adddealer/adddealer.component';
import { ShowdealersComponent } from './admin/dealer/showdealers/showdealers.component';
import { UpdatedealerComponent } from './admin/dealer/updatedealer/updatedealer.component';
import { AddshopComponent } from './admin/shop/addshop/addshop.component';
import { AssigndealerComponent } from './admin/shop/assigndealer/assigndealer.component';
import { DealertoshopComponent } from './admin/shop/dealertoshop/dealertoshop.component';
import { ShowshopsComponent } from './admin/shop/showshops/showshops.component';
import { UpdateshopComponent } from './admin/shop/updateshop/updateshop.component';
import { AppointmentsComponent } from './dealer/appointments/appointments.component';
import { DealerhomeComponent } from './dealer/dealerhome/dealerhome.component';
import { DealerloginComponent } from './dealer/dealerlogin/dealerlogin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PopupComponent } from './signup/popup/popup.component';
 import { SignupComponent } from './signup/signup.component';
import { BookingdetailsComponent } from './user/bookingdetails/bookingdetails.component';
import { BookslotComponent } from './user/bookslot/bookslot.component';

import { UserhomeComponent } from './user/userhome/userhome.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"", component:HomeComponent},
  
  {path:"signup", component:SignupComponent},
 
  {path:"bookslot", component:BookslotComponent},
  {path:"details", component:BookingdetailsComponent},
  {path:"adminlogin", component:AdminloginComponent},
  {path:"dealerlogin", component:DealerloginComponent},
  {path:"popup", component:PopupComponent},
  {path:"userhome", component:UserhomeComponent},
  {path:"adddealer", component:AdddealerComponent},
  {path:"showdealers", component:ShowdealersComponent},
  {path:"updatedealer", component:UpdatedealerComponent},
  {path:"addshop", component:AddshopComponent},
  {path:"showshops", component:ShowshopsComponent},
  {path:"updateshop", component:UpdateshopComponent},
  {path:"ahome", component:AhomeComponent},
  {path:"bookingdetails", component:BookingdetailsComponent},
  {path:"assigndealer", component:AssigndealerComponent},
  {path:"dealertoshop", component:DealertoshopComponent},
  {path:"appointments", component:AppointmentsComponent},
 
  {path:"dealerhome", component:DealerhomeComponent},
 

  

  
  

  
 

 


  


 

  
 
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
