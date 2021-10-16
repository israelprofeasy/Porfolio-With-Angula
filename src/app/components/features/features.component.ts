import { Component, OnInit } from '@angular/core';
import { faLaptop, faEdit, faSearch, faLaptopCode } from '@fortawesome/free-solid-svg-icons'; 
import { faAndroid, faApple } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  faLaptop = faLaptop;
  faEdit = faEdit;
  faLaptopCode = faLaptopCode;
  faSearch = faSearch;
  faAndroid = faAndroid;
  faApple = faApple;

}
