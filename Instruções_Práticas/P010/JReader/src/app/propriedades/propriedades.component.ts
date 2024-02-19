import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LeituraService } from '../leitura.service';

@Component({
  selector: 'app-propriedades',
  templateUrl: './propriedades.component.html',
  styleUrl: './propriedades.component.css'
})
export class PropriedadesComponent {
  propriedades:any;
  constructor(private leituraService: LeituraService) {
    this.propriedades = [];
    this.leituraService.objeto$.subscribe(objeto => {
      this.atualizarPropriedades(objeto);
    });
  }

  selecionado(propriedade: string) {
    if (propriedade) {
      this.leituraService.setPropriedades(propriedade);
    } else {
      console.warn("Propriedade não selecionada.");
    }
  }

  atualizarPropriedades(veiculo: any) {
    this.propriedades = veiculo ? Object.keys(veiculo) : [];
  }
}
