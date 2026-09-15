import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lista1RoutingModule } from './lista1-routing-module';
import { Exerc1 } from './exerc1/exerc1';

@NgModule({
  declarations: [Exerc1],
  imports: [CommonModule, Lista1RoutingModule],
})
export class Lista1Module {}
