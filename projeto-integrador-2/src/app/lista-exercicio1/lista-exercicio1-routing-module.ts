import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exerc1 } from './exerc1/exerc1';

const routes: Routes = [
  {path: 'exerc1', component: Exerc1 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaExercicio1RoutingModule {}
