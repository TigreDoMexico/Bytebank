import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransferenciaData } from './transferencia.types';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTransferencias: TransferenciaData[]
  private url = 'http://localhost:3000/transferencias'

  constructor(private httpClient: HttpClient) {
    this.listaTransferencias = []
  }

  get transferencias() {
    return this.listaTransferencias
  }

  getTransferenciasApi(): Observable<TransferenciaData[]> {
    return this.httpClient.get<TransferenciaData[]>(this.url);
  }

  postTransferenciaApi(data: TransferenciaData): Observable<TransferenciaData> {
    return this.httpClient.post<TransferenciaData>(this.url, data)
  }

  adicionar(transferencia: TransferenciaData) {
    this.hidratate(transferencia)
    return this.postTransferenciaApi(transferencia)
  }

  private hidratate(transferencia: TransferenciaData) {
    transferencia.data = new Date()
  }

}
