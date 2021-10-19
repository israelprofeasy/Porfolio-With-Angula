import { HttpClient } from '@angular/common/http';
import { computeDecimalDigest } from '@angular/compiler/src/i18n/digest';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  myinfo: any;
  fullDetails ={
    firstname:"",
    lastname:"",
  };
  
      
  constructor(private http:UserService) { }

   ngOnInit(): void {
   this.http.getData().subscribe(
      res=>{
        this.myinfo = res;
        this.fullDetails.firstname = this.myinfo.firstname;
        this.fullDetails.lastname = this.myinfo.lastname;
        // console.log(this.fullDetails)
      },
      err => {
        console.log(err)

      }
    );
    
  }

}
