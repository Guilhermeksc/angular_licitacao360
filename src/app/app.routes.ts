import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent // Landing Page
  },
  {
    path: 'login',
    component: LoginComponent // Página de Login
  },
  {
    path: '360',
    component: DashboardComponent // Dashboard
  },
  {
    path: '**',
    redirectTo: '' // Redireciona para a Home em caso de rota inválida
  }
];
