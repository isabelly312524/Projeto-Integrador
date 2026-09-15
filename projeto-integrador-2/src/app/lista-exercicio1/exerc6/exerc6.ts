import { Component } from '@angular/core';

@Component({
  selector: 'app-exerc6',
  standalone: false,
  templateUrl: './exerc6.html',
  styleUrl: './exerc6.css',
})
export class Exerc6 {
  num = 0;
  desabilitado = true;

  mais() {
    this.num++;
    this.desabilitado = true;
  }

  menos() {
    if (this.num > 0) {
      this.num--;
      this.desabilitado = true;
    } else if (this.num == 0) {
      this.desabilitado = false;
    }
  }
}
