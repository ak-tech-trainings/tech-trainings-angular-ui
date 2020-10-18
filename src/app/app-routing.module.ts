import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {AboutUsComponent} from './about-us/about-us.component'
import {CoursesComponent} from './courses/courses.component'
import {ContactUsComponent} from './contact-us/contact-us.component'
import {LoginComponent} from './login/login.component'
import {RegistrationComponent} from './registration/registration.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'about-us', component: AboutUsComponent},
  {path:'courses', component: CoursesComponent},
  {path:'contact-us', component: ContactUsComponent},
  //remaining components 


  {path:'login', component: LoginComponent},
  {path:'register', component: RegistrationComponent},

  //page not found
  {path:'page-not-found', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }