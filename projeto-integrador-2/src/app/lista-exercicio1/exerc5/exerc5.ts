import { Component } from '@angular/core';

@Component({
  selector: 'app-exerc5',
  standalone: false,
  templateUrl: './exerc5.html',
  styleUrl: './exerc5.css',
})
export class Exerc5 {
  num = 0;
  curtir(){
    this.num++;
  }
}
