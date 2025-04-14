import { Routes } from '@angular/router';

export const routes: Routes = [
     {path: '', loadComponent: () => import('./pages/landing/landing.component').then(m => m.LandingComponent)},
    {
        path: 'login',
        loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'register',
        loadComponent: () => import('./auth/register/register.component').then(m => m.RegisterComponent)
    },
    { path: 'jobseeker/s/profile', loadComponent: () => import('./job-seeker/setup/profile.component').then(m => m.ProfileComponent) },
    
    { path: 'employer/s/profile', loadComponent: () => import('./recruiter/setup/profile.component').then(m => m.ProfileComponent) },
    {path: 'jobseeker/dashboard', loadComponent: () => import('./job-seeker/dashboard/dashboard.component').then(m => m.DashboardComponent)},
    {path: 'employer/dashboard', loadComponent: () => import('./recruiter/dashboard/dashboard.component').then(m => m.DashboardComponent)},
    {path: 'admin/dashboard', loadComponent: () => import('./admin/dashboard/dashboard.component').then(m => m.DashboardComponent)}, 
];
