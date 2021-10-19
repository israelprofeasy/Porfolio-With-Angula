import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getData(){
    const url = "http://portfolio-dotnet.herokuapp.com/api/v1/biodata/3";
    return this.http.get(url)
  }
  
}
