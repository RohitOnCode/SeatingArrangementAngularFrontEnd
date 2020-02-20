import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DisplayServiceService {

  constructor(private httpClient : HttpClient ) { 


  }

 public  getEmployeesList() : Observable<any>{
 return this.httpClient.get("http://localhost:8080/employee/getAllEmployees").pipe(
 tap(a=> console.log(a))
 )
 

  }
}
