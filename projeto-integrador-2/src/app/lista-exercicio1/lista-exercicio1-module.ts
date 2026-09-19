import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListaExercicio1RoutingModule } from './lista-exercicio1-routing-module';
import { Exerc1 } from './exerc1/exerc1';
import { Exerc2 } from './exerc2/exerc2';
import { Exerc3 } from './exerc3/exerc3';
import { Exerc4 } from './exerc4/exerc4';
import { Exerc5 } from './exerc5/exerc5';
import { Exerc6 } from './exerc6/exerc6';
import { Exerc7 } from './exerc7/exerc7';
import { Exerc8 } from './exerc8/exerc8';
import { Exerc9 } from './exerc9/exerc9';
import { Exerc10 } from './exerc10/exerc10';
import { Exerc11 } from './exerc11/exerc11';
import { Exerc12 } from './exerc12/exerc12';

@NgModule({
  declarations: [
    Exerc1,
    Exerc2,
    Exerc3,
    Exerc4,
    Exerc5,
    Exerc6,
    Exerc7,
    Exerc8,
    Exerc9,
    Exerc10,
    Exerc11,
    Exerc12,
  ],
  imports: [CommonModule, ListaExercicio1RoutingModule, FormsModule],
})
export class ListaExercicio1Module {}
