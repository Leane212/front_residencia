import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-barra-de-busca',
  templateUrl: './barra-de-busca.component.html',
  styleUrl: './barra-de-busca.component.css'
})
export class BarraDeBuscaComponent {
  @Output() busca_feita = new EventEmitter<string>();
  busca = "";
  resultado:any;
  pesquisa="";
  apiService: any;
  

  getBusca(){
    this.busca = (<HTMLInputElement>document.getElementById("tBusca"))!.value || "";
    this.pesquisado();
  }

  pesquisado(){
    this.busca_feita.emit(this.busca);
    this.realizarPesquisa();
  }

  realizarPesquisa() {
    this.apiService.getData(this.pesquisa).subscribe((res: { [x: string]: { [x: string]: any; }; }) => {
      this.resultado = res["query"]["search"];
      console.log(this.resultado);
    });
  }
}