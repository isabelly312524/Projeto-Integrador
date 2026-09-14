import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivrosRoutingModule } from './livros-routing-module';
import { CadLivros } from './cad-livros/cad-livros';
import { Listagem } from './listagem/listagem';

@NgModule({
  declarations: [CadLivros, Listagem],
  imports: [CommonModule, LivrosRoutingModule],
})
export class LivrosModule {}
