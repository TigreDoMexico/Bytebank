import { Component, OnInit } from '@angular/core';
import { TransferenciaService } from 'src/services/transferencia-service/transferencia.service';
import { TransferenciaData } from 'src/services/transferencia-service/transferencia.types';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  transferencias: TransferenciaData[] = []

  constructor(private service: TransferenciaService) { }

  ngOnInit(): void {
    this.service.getTransferenciasApi().subscribe((lista: TransferenciaData[]) => {
      this.transferencias = lista;
    });
  }
}
