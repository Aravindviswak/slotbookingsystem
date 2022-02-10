import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Editentity } from './editentity';

@Injectable({
  providedIn: 'root'
})
export class EditService {
  private baseUrl="http://localhost:10012/UpdateDealer";
  constructor(private http:HttpClient) { }
  update(edit:Editentity,areaCode:any):Observable<any>{

    return this.http.put(`${this.baseUrl}/${areaCode}`,edit,{responseType :'text' as 'json'});

  }

}
