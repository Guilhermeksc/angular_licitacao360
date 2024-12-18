import { Component } from '@angular/core';
import { ApiService } from '../../../../core/services/api.service';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-controle-contratos',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './controle-contratos.component.html',
  styleUrls: ['./controle-contratos.component.scss'],
})
export class ControleContratosComponent {
  uasg: string = '';
  tabelaSelecionada: string = '';
  tabelasDisponiveis: string[] = [];
  resultado: any = null;

  constructor(private apiService: ApiService) {}

  consultarUASG() {
    if (this.uasg) {
      this.apiService.consultarUASG(this.uasg).subscribe(
        (response) => {
          this.resultado = response;
          if (response.success) {
            alert(`Sucesso: ${response.message}`);
          } else {
            alert(`Erro: ${response.message}`);
          }
        },
        (error) => {
          console.error('Erro ao consultar UASG:', error);
          alert('Erro ao consultar UASG.');
        }
      );
    }
  }

  visualizarDadosTabela() {
    if (this.tabelaSelecionada) {
      this.apiService.visualizarTabela(this.tabelaSelecionada).subscribe(
        (response) => {
          if (response.success) {
            this.resultado = response;
          } else {
            alert(`Erro: ${response.message}`);
          }
        },
        (error) => {
          console.error('Erro ao visualizar tabela:', error);
          alert('Erro ao visualizar tabela.');
        }
      );
    }
  }
}
