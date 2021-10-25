import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  constructor(private httpClient: HttpClient) { }

  autenticar(conta: string, agencia: string, senha: string) : Observable<any> {
    // Como não tem regras no back, essa rota será um get
    return this.httpClient.get(
      'http://localhost:3000/contas',
      { params: { conta, agencia, senha }
    })
  }
}
