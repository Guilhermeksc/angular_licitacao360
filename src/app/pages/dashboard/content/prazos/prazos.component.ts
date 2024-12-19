import { Component } from '@angular/core';
import { ApiService } from '../../../../core/services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prazos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './prazos.component.html',
  styleUrls: ['./prazos.component.scss'],
})
export class PrazosComponent {
  uasg: string = '';
  tabelaSelecionada: string = '';
  tabelasDisponiveis: string[] = [];
  resultado: any = null;
  colunas: string[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.atualizarTabelasDisponiveis();
  }
  
  consultarUASG() {
    if (this.uasg) {
      console.log('Enviando requisição para consultar UASG:', this.uasg);

      this.apiService.consultarUASG(this.uasg).subscribe(
        (response: any) => {
          console.log('Resposta da consulta UASG:', response);
          if (response.success) {
            alert(response.message);
            this.atualizarTabelasDisponiveis();
          } else {
            alert(`Erro: ${response.message}`);
          }
        },
        (error: any) => {
          console.error('Erro ao consultar UASG:', error);
          alert('Erro ao consultar UASG.');
        }
      );
    }
  }

  atualizarTabelasDisponiveis() {
    console.log('Atualizando lista de tabelas disponíveis...');

    this.apiService.getTables().subscribe({
      next: (response: any) => {
        console.log('Tabelas disponíveis recebidas:', response);
        if (response.success) {
          this.tabelasDisponiveis = response.tables;
        }
      },
      error: (error: any) => {
        console.error('Erro ao atualizar tabelas disponíveis:', error);
      }
    });
  }

  visualizarDadosTabela() {
    if (this.tabelaSelecionada) {
      console.log('Visualizando tabela:', this.tabelaSelecionada);

      this.apiService.visualizarTabela(this.tabelaSelecionada).subscribe(
        (response: any) => {
          console.log('Dados recebidos:', response);
          if (response.success) {
            this.resultado = response.data;
            this.colunas = response.columns;
          } else {
            alert(`Erro: ${response.message}`);
          }
        },
        (error: any) => {
          console.error('Erro ao visualizar tabela:', error);
          alert('Erro ao visualizar tabela.');
        }
      );
    }
  }
}
