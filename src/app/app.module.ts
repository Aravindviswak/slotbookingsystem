import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './share/components/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';

import { BookslotComponent } from './user/bookslot/bookslot.component';
import { BookingdetailsComponent } from './user/bookingdetails/bookingdetails.component';
import { AppointmentsComponent } from './dealer/appointments/appointments.component';
import { AdddealerComponent } from './admin/dealer/adddealer/adddealer.component';
import { FormsModule } from '@angular/forms';
import { ShowdealersComponent } from './admin/dealer/showdealers/showdealers.component';
import { UpdatedealerComponent } from './admin/dealer/updatedealer/updatedealer.component';
import { DeletedealerComponent } from './admin/dealer/deletedealer/deletedealer.component';
import { AddshopComponent } from './admin/shop/addshop/addshop.component';
import { ShowshopsComponent } from './admin/shop/showshops/showshops.component';
import { AssigndealerComponent } from './admin/shop/assigndealer/assigndealer.component';
import { DeleteshopComponent } from './admin/shop/deleteshop/deleteshop.component';
import { AhomeComponent } from './admin/ahome/ahome.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { DealerloginComponent } from './dealer/dealerlogin/dealerlogin.component';
import { HttpClientModule } from '@angular/common/http';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { DealerhomeComponent } from './dealer/dealerhome/dealerhome.component';
import { PopupComponent } from './signup/popup/popup.component';
import { UpdateshopComponent } from './admin/shop/updateshop/updateshop.component';
import { DealertoshopComponent } from './admin/shop/dealertoshop/dealertoshop.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    
    BookslotComponent,
    BookingdetailsComponent,
    AppointmentsComponent,
    AdddealerComponent,
    DeletedealerComponent,
    ShowdealersComponent,
    UpdatedealerComponent,
    DeletedealerComponent,
    AddshopComponent,
    ShowshopsComponent,
    AssigndealerComponent,
    DeleteshopComponent,
    AhomeComponent,
    AdminloginComponent,
    DealerloginComponent,
    UserhomeComponent,
    DealerhomeComponent,
    PopupComponent,
    UpdateshopComponent,
    DealertoshopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
