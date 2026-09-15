import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exerc1 } from './exerc1/exerc1';
import { Exerc2 } from './exerc2/exerc2';
import { Exerc3 } from './exerc3/exerc3';
import { Exerc4 } from './exerc4/exerc4';
import { Exerc5 } from './exerc5/exerc5';
import { Exerc6 } from './exerc6/exerc6';
import { Exerc7 } from './exerc7/exerc7';
const routes: Routes = [
  {path: 'exerc1', component: Exerc1 },
  {path: 'exerc2', component: Exerc2 },
  {path: 'exerc3', component: Exerc3 },
  {path: 'exerc4', component: Exerc4 },
  {path: 'exerc5', component: Exerc5 },
  {path: 'exerc6', component: Exerc6 },
  {path: 'exerc7', component: Exerc7 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaExercicio1RoutingModule {}
