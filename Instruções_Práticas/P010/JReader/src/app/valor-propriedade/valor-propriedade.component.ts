import { Component, Input } from '@angular/core';
import { LeituraService } from '../leitura.service';

@Component({
  selector: 'app-valor-propriedade',
  templateUrl: './valor-propriedade.component.html',
  styleUrl: './valor-propriedade.component.css'
})
export class ValorPropriedadeComponent {
  valor:any;
  objeto:any;
  constructor(private leituraService : LeituraService){
    this.leituraService.objeto$.subscribe(objeto=>{
      this.objeto = objeto;
    });
    this.leituraService.propriedades$.subscribe(propriedades => {
      this.getValores(propriedades);
    });
    
  }
  getValores(propriedade:any){
    for(const key in this.objeto){
      if(key == propriedade){
        this.valor = this.objeto[key];
        break;
      }
    }
  }
}
