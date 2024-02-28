import { Component, Input } from '@angular/core';
import { LeituraService } from '../leitura.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent {
  salvos:any[] =  [];
  objeto:any;
  json:string[] = [];
  constructor(private leituraService : LeituraService){ 
    this.leituraService.clicado$.subscribe(click => {
      if(click == true){
        this.adicionarVeiculo();
      }
    });
    this.leituraService.objeto$.subscribe(objeto => {
      this.objeto = objeto;
    })
  }
  adicionarVeiculo(){
    this.salvos.push(this.objeto);
    this.json.push(JSON.stringify(this.salvos));
    this.leituraService.clicou(false);
    console.log(this.json);
  }

}
