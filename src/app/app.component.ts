import { TransferenciaService } from './../services/transferencia-service/transferencia.service';
import { Component } from '@angular/core';
import { NovaTransferenciaEvent } from './nova-transferencia/nova-transferencia.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  constructor(private service: TransferenciaService) { }
}
