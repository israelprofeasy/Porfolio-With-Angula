import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  myinfo: any;
  fullDetails ={
    firstname:"",
    lastname:"",
    phonenumber:"",
    email:"",
    address: {street:"",
              city:"",
              state:"",
              country:"",
          }
  };
  
      
  constructor(private http:UserService) { }

   ngOnInit(): void {
   this.http.getData().subscribe(
      res=>{
        this.myinfo = res;
        this.fullDetails.firstname = this.myinfo.firstname;
        this.fullDetails.lastname = this.myinfo.lastname;
        this.fullDetails.phonenumber = this.myinfo.phonenumber;
        this.fullDetails.email = this.myinfo.email;
        this.fullDetails.address = this.myinfo.address;
         //console.log(this.fullDetails)
      },
      err => {
        console.log(err)

      }
    );
    
  }

}
