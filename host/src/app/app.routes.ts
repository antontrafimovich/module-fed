import { Routes, UrlMatchResult, UrlSegment } from '@angular/router';
import { AboutComponent } from './about.component';
import { HomeComponent } from './home.component';
import { ReactComponent } from './react.component';

const reactComponentPrefixMatcher = (
  segments: UrlSegment[]
): UrlMatchResult | null => {
  if (segments.length > 0 && segments[0].path === 'react-component') {
    return { consumed: segments };
  }

  return null;
};

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { matcher: reactComponentPrefixMatcher, component: ReactComponent }
];
