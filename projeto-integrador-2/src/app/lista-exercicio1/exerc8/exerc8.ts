import { Component } from '@angular/core';

@Component({
  selector: 'app-exerc8',
  standalone: false,
  templateUrl: './exerc8.html',
  styleUrl: './exerc8.css',
})
export class Exerc8 {
  nome = '';
  precoFormatado = '';
  preco = 0;
  qnt = 0;

  formatarPreco(event: Event) {
    const input = event.target as HTMLInputElement;
    let valor = input.value.replace(/\D/g, ''); // remove tudo que não é dígito

    this.preco = Number(valor) / 100;

    this.precoFormatado = this.preco.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    input.value = this.precoFormatado;
  }
}
