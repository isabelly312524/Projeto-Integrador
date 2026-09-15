import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaExercicio1RoutingModule } from './lista-exercicio1-routing-module';
import { Exerc1 } from './exerc1/exerc1';
import { Exerc2 } from './exerc2/exerc2';
import { Exerc3 } from './exerc3/exerc3';
import { Exerc4 } from './exerc4/exerc4';
import { Exerc5 } from './exerc5/exerc5';
import { Exerc6 } from './exerc6/exerc6';
import { Exerc7 } from './exerc7/exerc7';

@NgModule({
  declarations: [Exerc1, Exerc2, Exerc3, Exerc4, Exerc5, Exerc6, Exerc7],
  imports: [CommonModule, ListaExercicio1RoutingModule],
})
export class ListaExercicio1Module {}
