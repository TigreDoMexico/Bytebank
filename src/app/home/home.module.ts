import { DashboardComponent } from './../dashboard/dashboard.component';
import { NovaTransferenciaComponent } from './../nova-transferencia/nova-transferencia.component';
import { ExtratoComponent } from './../extrato/extrato.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    ExtratoComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
