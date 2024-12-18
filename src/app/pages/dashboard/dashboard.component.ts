import { Component } from '@angular/core';
import { MinisidebarComponent } from './minisidebar/minisidebar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ControleContratosComponent } from '../../pages/dashboard/content/controle-contratos/controle-contratos.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  imports: [
    CommonModule,
    MinisidebarComponent,
    SidebarComponent,
    ControleContratosComponent,
  ],
})
export class DashboardComponent {
  activeSection: string = 'prazos';

  setSection(section: string) {
    this.activeSection = section;
  }
}