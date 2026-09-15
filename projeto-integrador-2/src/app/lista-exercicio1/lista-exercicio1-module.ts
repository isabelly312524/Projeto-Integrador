import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaExercicio1RoutingModule } from './lista-exercicio1-routing-module';
import { Exerc1 } from './exerc1/exerc1';

@NgModule({
  declarations: [Exerc1],
  imports: [CommonModule, ListaExercicio1RoutingModule],
})
export class ListaExercicio1Module {}
