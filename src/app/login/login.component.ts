import { AutenticacaoService } from '../../services/autenticacao-service/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  conta: string = ''
  agencia: string = ''
  senha: string = ''

  constructor(
    private authService: AutenticacaoService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  login() {
    this.authService.autenticar(this.conta, this.agencia, this.senha)
      .subscribe((data) => {
        if (data && data.length)
          this.router.navigateByUrl('/bank')
        else
          alert('Usuário ou senha inválido')
      }, (error) => {
        alert('Usuário ou senha inválido')
        console.log(error)
      })
  }
}
