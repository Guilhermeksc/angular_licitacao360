import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ControleContratosComponent } from './controle-contratos/controle-contratos.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  imports: [CommonModule , FormsModule, ControleContratosComponent],
  standalone: true, // Standalone ou parte de um módulo
})
export class ContentComponent {
  activeSection: string = 'prazos';
}