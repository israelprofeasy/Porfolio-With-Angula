import { HttpClient } from '@angular/common/http';
import { computeDecimalDigest } from '@angular/compiler/src/i18n/digest';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

export class FullDetails {
  constructor( 
    public firstname: string,
    public lastname: string,
    public email: string,
    public phone: number,
    public address: object,
    public skills: object,
    public socialhandles: object,
    
  ){}
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  myinfo: any = {};

  constructor(private http:UserService) { }

  ngOnInit(): void {
   this.http.getData().subscribe(
      res=>{
        this.myinfo = res;
            console.log(res)
      },
      err => {
        console.log(err)

      }
    );
    
  }

}
