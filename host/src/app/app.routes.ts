import { Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { HomeComponent } from './home.component';
import { ReactComponent } from './react.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'react-component', component: ReactComponent }
];
