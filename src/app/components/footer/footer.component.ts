import { Component, OnInit } from '@angular/core';
import { faFacebook, faTwitter, faLinkedin, faGithub, faMediumM, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faAngleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  faFacebook= faFacebook;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faMediumM = faMediumM;
  faAngleDown = faAngleDown;
  faAngleDoubleUp = faAngleDoubleUp;

}
