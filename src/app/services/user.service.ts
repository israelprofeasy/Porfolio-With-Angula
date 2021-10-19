import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getData(): Observable<any>{
    const url = "https://portfolio-dotnet.herokuapp.com/api/v1/biodata/3";
    return this.http.get(url).pipe(
      shareReplay()
    )
  }
  
}
