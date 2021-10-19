import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
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
