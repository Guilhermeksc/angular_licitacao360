import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Garante que o serviço esteja disponível globalmente
})
export class ApiService {
  private baseUrl = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) {} // Certifique-se de que `HttpClient` está sendo injetado corretamente

  consultarUASG(uasg: string): Observable<any> {
    return this.http.post(`${this.baseUrl}consulta_api/`, { uasg });
  }

  visualizarTabela(tabela: string): Observable<any> {
    return this.http.get(`${this.baseUrl}consulta_api/?tabela=${tabela}`);
  }

  limparTabelas(): Observable<any> {
    return this.http.post(`${this.baseUrl}limpar_tabelas/`, {});
  }
}