import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LeituraService } from '../leitura.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.css'
})
export class ClassesComponent {
  categorias:string[] = [];
  json: any;
  constructor(private leituraService : LeituraService){
    this.leituraService.json$.subscribe(json => {
      this.json = json;
      this.atualizarCategorias();
    });
  }

  atualizarCategorias() {
    this.categorias = Object.keys(this.json);
  }

  selecionado(categoria: string) {
    const categoriaSelecionada = this.json[categoria];
    if (categoriaSelecionada) {
      this.leituraService.setCategoria(categoriaSelecionada);
      this.leituraService.setPermissaoSalvar(true);
    } else {
      console.warn(`Categoria '${categoria}' não encontrada.`);
    }
  }
}
