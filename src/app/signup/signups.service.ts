import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Signupc } from './signupc';

@Injectable({
  providedIn: 'root'
})
export class SignupsService {
   private baseUrl="http://localhost:10012/createUser";
  constructor(private http:HttpClient) { }

 
signUpUser(user:Signupc)
{
    return this.http.post(this.baseUrl,user,{responseType:'text' as 'json'});
}


}
