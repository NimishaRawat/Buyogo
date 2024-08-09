import { Routes } from '@angular/router';
import { LoginSignupStep1Component } from './login-signup-step1.component';
import { LoginSignupStep2Component } from './login-signup-step2.component';

export const authRoutes: Routes = [
  { path: 'step1', component: LoginSignupStep1Component },
  { path: 'step2', component: LoginSignupStep2Component }
];
