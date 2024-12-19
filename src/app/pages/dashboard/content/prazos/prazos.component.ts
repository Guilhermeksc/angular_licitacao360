import { Component } from '@angular/core';
import { ApiService } from '../../../../core/services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DetalhesDialogComponent } from './detalhes-dialog/detalhes-dialog.component';

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
  resultado: any[] = [];
  colunas: string[] = [];
  filtro: string = '';
  dadosFiltrados: any[] = [];
  dadosSelecionados: any = null;

  constructor(private apiService: ApiService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.atualizarTabelasDisponiveis();
  }

  consultarUASG() {
    if (this.uasg) {
      this.apiService.consultarUASG(this.uasg).subscribe({
        next: (response: any) => {
          if (response.success) {
            alert(response.message);
            this.atualizarTabelasDisponiveis();
          } else {
            alert(`Erro: ${response.message}`);
          }
        },
        error: (error: any) => alert('Erro ao consultar UASG.'),
      });
    }
  }

  atualizarTabelasDisponiveis() {
    this.apiService.getTables().subscribe({
      next: (response: any) => {
        if (response.success) {
          this.tabelasDisponiveis = response.tables;
        }
      },
      error: (error: any) => console.error('Erro ao atualizar tabelas:', error),
    });
  }

  visualizarDadosTabela() {
    if (this.tabelaSelecionada) {
      this.apiService.visualizarTabela(this.tabelaSelecionada).subscribe({
        next: (response: any) => {
          console.log('Dados recebidos:', response); // Depuração dos dados completos
  
          if (response.success && response.data && response.data.length > 0) {
            // Imprime os índices do primeiro item para verificar a estrutura
            console.log('Estrutura dos dados (primeira linha):', response.data[0]);
  
            this.resultado = response.data.map((linha: any) => ({
              id: linha[0],               // Ajuste conforme a posição retornada
              numero: linha[1],
              tipo: linha[2],
              processo: linha[3],
              objeto: linha[6],
              valor_global: linha[16],
              fornecedor_nome: linha[17],
            }));
  
            this.colunas = ['ID', 'Número', 'Tipo', 'Processo', 'Objeto', 'Valor Global', 'Fornecedor'];
            this.dadosFiltrados = [...this.resultado];
          } else {
            console.warn('Nenhum dado encontrado na resposta.');
            this.resultado = [];
            this.dadosFiltrados = [];
          }
        },
        error: (error: any) => {
          console.error('Erro ao visualizar tabela:', error);
          alert('Erro ao visualizar tabela.');
        },
      });
    }
  }
  
  
  
  aplicarFiltro() {
    const termo = this.filtro.toLowerCase();
    this.dadosFiltrados = this.resultado.filter((linha: any) =>
      Object.values(linha).some((valor: any) =>
        valor != null && valor.toString().toLowerCase().includes(termo)
      )
    );
  }
  
  

  abrirDetalhes(linha: any) {
    const dialogRef = this.dialog.open(DetalhesDialogComponent, {
      width: '400px',
      data: linha,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('O modal foi fechado', result);
    });
  }
}