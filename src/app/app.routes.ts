import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { JobListingComponent } from './pages/job-listing/job-listing.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { JobDetailComponent } from './pages/job-detail/job-detail.component';

export const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'registration',
    component:RegistrationComponent
  },
  {
    path:'jobs',
    component:JobListingComponent
  },
  {
    path:'companies',
    component:JobListingComponent
  },
  {
    path:'jobs/job-detail',
    component:JobDetailComponent
  },
  {
    path:'**',
    component:HomeComponent
  }
];
