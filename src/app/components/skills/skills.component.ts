import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  myinfo: any;
  fullDetails =[0]
    
  
      
  constructor(private http:UserService) { }

   ngOnInit(): void {
   this.http.getData().subscribe(
      res=>{
        this.myinfo = res;
       this.fullDetails[0] =this.myinfo.skills[0]
       this.fullDetails[1] =this.myinfo.skills[1]
       this.fullDetails[2] =this.myinfo.skills[2]
       this.fullDetails[3] =this.myinfo.skills[3]
       this.fullDetails[4] =this.myinfo.skills[4]
       this.fullDetails[5] =this.myinfo.skills[5]
       this.fullDetails[6] =this.myinfo.skills[6]
       this.fullDetails[7] =this.myinfo.skills[7]
         console.log(this.myinfo);
      },
      err => {
        console.log(err)

      }
    );
    
  }

}
