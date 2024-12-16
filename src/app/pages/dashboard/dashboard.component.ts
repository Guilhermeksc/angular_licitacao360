import { Component } from '@angular/core';
import { MinisidebarComponent } from './minisidebar/minisidebar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-dashboard',
  imports: [MinisidebarComponent, SidebarComponent, ContentComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
