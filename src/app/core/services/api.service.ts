import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  consultarUASG(uasg: string): Observable<any> {
    return this.http.post(this.apiUrl, { uasg });
  }

  visualizarTabela(tabela: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?tabela=${tabela}`);
  }
}