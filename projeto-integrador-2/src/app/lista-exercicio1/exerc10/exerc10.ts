import { Component } from '@angular/core';

@Component({
  selector: 'app-exerc10',
  standalone: false,
  templateUrl: './exerc10.html',
  styleUrl: './exerc10.css',
})
export class Exerc10 {
 user = "";
  senha = "";
  desabilitado = true;
  mostrarBoasVindas = false;

  verificarCampos() {
    this.desabilitado = (this.user === "" || this.senha === "");
  }

  entrar() {
    this.mostrarBoasVindas = true;
  }
  }


