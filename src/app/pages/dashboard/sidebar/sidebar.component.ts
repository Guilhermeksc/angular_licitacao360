import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class SidebarComponent {
  // Controle do estado dos menus
  showSubMenuNavigate = false;
  showSubMenu = false;
  showSubMenuDocs = false;

  toggleMenu(menu: string): void {
    console.log(`Toggled menu: ${menu}`); // Verifica se o método é chamado
    switch (menu) {
      case 'navigate':
        this.showSubMenuNavigate = !this.showSubMenuNavigate;
        break;
      case 'modules':
        this.showSubMenu = !this.showSubMenu;
        break;
      case 'docs':
        this.showSubMenuDocs = !this.showSubMenuDocs;
        break;
    }
  }  
}
