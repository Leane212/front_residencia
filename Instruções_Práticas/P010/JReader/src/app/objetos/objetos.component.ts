import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LeituraService } from '../leitura.service';

@Component({
  selector: 'app-objetos',
  templateUrl: './objetos.component.html',
  styleUrl: './objetos.component.css'
})
export class ObjetosComponent {
  veiculos:any;
  constructor(private leituraService : LeituraService){
    this.leituraService.categoria$.subscribe(categoria =>{
      this.veiculos = categoria;
    });
    
  }
  selecionado(veiculo: any) {
    if (veiculo) {
      this.leituraService.setObjeto(veiculo);
      this.leituraService.setPermissaoSalvar(false);
    } else {
      console.warn("Veículo não selecionado.");
    }
  }

}
