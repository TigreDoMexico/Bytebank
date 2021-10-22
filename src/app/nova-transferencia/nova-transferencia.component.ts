import { TransferenciaService } from 'src/services/transferencia-service/transferencia.service';
import { Component } from '@angular/core';
import { NovaTransferenciaEvent } from './nova-transferencia.types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {
  constructor(
    private service: TransferenciaService,
    private router: Router
  ) { }

  valor: number = 0
  destino: string = ''

  transferir () {
    const values: NovaTransferenciaEvent = {
      valor: this.valor,
      destino: this.destino,
      data: new Date()
    }

    // this.onTranferir.emit(values)

    this.service.adicionar(values)
      .subscribe(() => {
        this.limparCampos()
        this.router.navigateByUrl('home/extrato')
      })
  }

  limparCampos() {
    this.valor = 0
    this.destino = ''
  }
}
