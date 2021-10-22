import { DashboardComponent } from './../dashboard/dashboard.component';
import { NovaTransferenciaComponent } from './../nova-transferencia/nova-transferencia.component';
import { ExtratoComponent } from './../extrato/extrato.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    ExtratoComponent,
    DashboardComponent,
    NovaTransferenciaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
