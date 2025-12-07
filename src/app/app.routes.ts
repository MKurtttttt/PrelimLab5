import { Routes } from '@angular/router';
import { Home } from './home/home';
import { EmployeeDirectory } from './employee-directory/employee-directory';
import { About } from './about/about';
import { Products } from './products/products';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'employee-directory', component: EmployeeDirectory },
  { path: 'about', component: About },
  { path: 'products', component: Products },
  { path: '**', component: PageNotFound }
];
