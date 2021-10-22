import { DashboardComponent } from './../dashboard/dashboard.component';
import { NovaTransferenciaComponent } from './../nova-transferencia/nova-transferencia.component';
import { ExtratoComponent } from './../extrato/extrato.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'extrato', component: ExtratoComponent },
      { path: 'transacao', component: NovaTransferenciaComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
