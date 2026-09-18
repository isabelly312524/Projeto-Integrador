import { Component } from '@angular/core';

@Component({
  selector: 'app-exerc11',
  standalone: false,
  templateUrl: './exerc11.html',
  styleUrl: './exerc11.css',
})
export class Exerc11 {
  qnt = 0;
  total = 0;
  desabilitado = true;
  produto = false;

   mais() {
    this.qnt++;
    this.desabilitado = true;
    this.total = this.qnt * 8300;
  }

  menos() {
    if (this.qnt > 1) {
      this.qnt--;
      this.desabilitado = true;
      this.total = this.qnt * 8300;
    } else if (this.qnt == 1) {
      this.desabilitado = false;
      this.total = this.qnt * 8300;
    }
  }

  adicionar(){
     this.produto = true;
  }
}
