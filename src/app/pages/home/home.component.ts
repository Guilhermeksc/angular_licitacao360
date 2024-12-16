import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { MastheadComponent } from './masthead/masthead.component';
import { Licitacao360Component } from './licitacao360/licitacao360.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, MastheadComponent, Licitacao360Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
