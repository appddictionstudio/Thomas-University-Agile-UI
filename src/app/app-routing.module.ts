import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UpcomingCoursesComponent } from './upcoming-courses/upcoming-courses.component';
import { CorporateTrainingComponent } from './corporate-training/corporate-training.component';
import { AgileManifestoComponent } from './agile-manifesto/agile-manifesto.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { CourseCartComponent } from './course-cart/course-cart.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'upcoming-courses',
    component: UpcomingCoursesComponent,
  },
  {
    path: 'corporate-training',
    component: CorporateTrainingComponent,
  },
  {
    path: 'agile-manifesto',
    component: AgileManifestoComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'instructors',
    component: InstructorsComponent,
  },
  {
    path: 'course-cart',
    component: CourseCartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
