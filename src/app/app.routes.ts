import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CalendarComponent } from './pages/dashboard/content/calendar/calendar.component';
import { DashComponent } from './pages/dashboard/content/dash/dash.component';
import { ChatComponent } from './pages/dashboard/content/chat/chat.component';
import { ScrumViewComponent } from './pages/dashboard/content/scrum-view/scrum-view.component';
import { PgcComponent } from './pages/dashboard/content/pgc/pgc.component';
import { AnaliseComponent } from './pages/dashboard/content/analise/analise.component';
import { ApresentacaoComponent } from './pages/dashboard/content/apresentacao/apresentacao.component';
import { PrazosComponent } from './pages/dashboard/content/prazos/prazos.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: '360',
    component: DashboardComponent,
    children: [
      { path: 'calendar', component: CalendarComponent },
      { path: 'dash', component: DashComponent },
      { path: 'chat', component: ChatComponent },
      { path: 'scrum-view', component: ScrumViewComponent },
      { path: 'pgc', component: PgcComponent },
      { path: 'analise', component: AnaliseComponent },
      { path: 'apresentacao', component: ApresentacaoComponent },
      { path: 'prazos', component: PrazosComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];

