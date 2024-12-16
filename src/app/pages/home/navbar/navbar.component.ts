import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isMenuOpen = false; // Controla a abertura e fechamento
  isHidden = false; // Controla a visibilidade da navbar
  isScrollingUp = false; // Controla a cor do fundo da navbar
  lastScrollTop = 0; // Armazena a última posição do scroll

  @ViewChild('navbarResponsive', { static: false }) navbarResponsive!: ElementRef;

  constructor(private router: Router) {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const currentScroll = window.pageYOffset;

    if (currentScroll > this.lastScrollTop && currentScroll > 50) {
      // Rolando para baixo, esconde a barra
      this.isHidden = true;
      this.isScrollingUp = false;
    } else if (currentScroll < this.lastScrollTop) {
      // Rolando para cima, mostra a barra
      this.isHidden = false;
      this.isScrollingUp = true;
    }
  
    this.lastScrollTop = Math.max(0, currentScroll); // Evita valores negativos
  }

  toggleMenu(): void {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse) {
      this.isMenuOpen = !this.isMenuOpen;
      if (this.isMenuOpen) {
        navbarCollapse.classList.add('show');
      } else {
        navbarCollapse.classList.remove('show');
      }
    } else {
      console.error('Elemento navbar-collapse não encontrado.');
    }
  }
  

  navigateToLogin(): void {
    this.router.navigate(['/login']).then((success) => {
      if (success) {
        console.log('Navegação para /login bem-sucedida');
      } else {
        console.error('Erro ao navegar para /login');
      }
    });
  }
  closeMenu(): void {
    this.isMenuOpen = false; // Fecha o menu
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse) {
      navbarCollapse.classList.remove('show'); // Remove a classe 'show' para esconder o menu
    }
  }
}