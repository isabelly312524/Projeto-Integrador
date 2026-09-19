import { Component } from '@angular/core';

@Component({
  selector: 'app-exerc12',
  standalone: false,
  templateUrl: './exerc12.html',
  styleUrl: './exerc12.css',
})
export class Exerc12 {
  nome = '';
  qnt = 1;
  matricula = false;

  get nomeVazio(): boolean {
    return this.nome.trim() === '';
  }

  get desabilitadoMenos(): boolean {
    return this.qnt <= 1;
  }

  mais() {
    this.qnt++;
  }

  menos() {
    if (this.qnt > 1) {
      this.qnt--;
    }
  }

  matricular() {
    this.matricula = true;
    
  }
}