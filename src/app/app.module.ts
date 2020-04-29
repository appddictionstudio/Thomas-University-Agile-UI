import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { UpcomingCoursesComponent } from './upcoming-courses/upcoming-courses.component';
import { CorporateTrainingComponent } from './corporate-training/corporate-training.component';
import { MatButtonModule } from '@angular/material/button';
import { AgileManifestoComponent } from './agile-manifesto/agile-manifesto.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesBottomSectionComponent } from './courses-bottom-section/courses-bottom-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    UpcomingCoursesComponent,
    CorporateTrainingComponent,
    AgileManifestoComponent,
    ContactUsComponent,
    InstructorsComponent,
    FooterComponent,
    CoursesBottomSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
