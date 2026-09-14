import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadLivros } from './cad-livros/cad-livros';
import { Listagem } from './listagem/listagem';

const routes: Routes = [
  {path: 'cadastro', component: CadLivros},
  {path: 'listagem', component: Listagem }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivrosRoutingModule {}
