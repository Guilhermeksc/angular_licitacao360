import { Component } from '@angular/core';
import { ApiService } from '../../../../core/services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prazos',
  standalone: true,
  imports: [CommonModule, FormsModule], // Inclua aqui
  templateUrl: './prazos.component.html',
  styleUrls: ['./prazos.component.scss'],
})
export class PrazosComponent {
  uasg: string = '';
  tabelaSelecionada: string = '';
  tabelasDisponiveis: string[] = [];
  resultado: any = null;

  constructor(private apiService: ApiService) {}

  consultarUASG() {
    if (this.uasg) {
      this.apiService.consultarUASG(this.uasg).subscribe(
        (response) => {
          if (response.success) {
            this.resultado = response;
            alert(response.message);
            this.atualizarTabelasDisponiveis();
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

  limparTabelas() {
    this.apiService.limparTabelas().subscribe(
      (response) => {
        if (response.success) {
          alert(response.message);
          this.atualizarTabelasDisponiveis();
        } else {
          alert(`Erro: ${response.message}`);
        }
      },
      (error) => {
        console.error('Erro ao limpar tabelas:', error);
        alert('Erro ao limpar tabelas.');
      }
    );
  }

  atualizarTabelasDisponiveis() {
    this.apiService.visualizarTabela('').subscribe(
      (response) => {
        if (response.success) {
          this.tabelasDisponiveis = response.data;
        }
      },
      (error) => {
        console.error('Erro ao atualizar tabelas disponíveis:', error);
      }
    );
  }
}
