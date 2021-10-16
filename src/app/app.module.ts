import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { QualityComponent } from './components/quality/quality.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FeaturesComponent } from './components/features/features.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ReviewComponent } from './components/review/review.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    AboutComponent,
    QualityComponent,
    SkillsComponent,
    FeaturesComponent,
    PortfolioComponent,
    ReviewComponent,
    ContactComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { 
 
  
}
 
