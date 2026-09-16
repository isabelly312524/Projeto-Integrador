import { Component } from '@angular/core';

@Component({
  selector: 'app-exerc9',
  standalone: false,
  templateUrl: './exerc9.html',
  styleUrl: './exerc9.css',
})
export class Exerc9 {
  nome = '';
  qnt = 0;
  desabilitado = true;

  mais(){
    this.qnt++
    this.desabilitado = true;
  }

  menos(){
    if(this.qnt > 0){
      this.qnt--
      this.desabilitado = true;
  }else if (this.qnt == 0){
    this.desabilitado = false;
  }

  }
  
}
