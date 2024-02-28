import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeituraService {
  constructor() { }
  private json = new Subject<any>();
  private categoria = new Subject<any>();
  private propriedades = new Subject<any>();
  private objeto = new Subject<any>();
  private permissao = new Subject<any>();
  private clicado = new Subject<any>();
  json$ = this.json.asObservable();
  categoria$ = this.categoria.asObservable();
  propriedades$ = this.propriedades.asObservable();
  objeto$ = this.objeto.asObservable();
  permissao$ = this.permissao.asObservable();
  clicado$ = this.clicado.asObservable();
  setJson(value : any){
    this.json.next(value);
  }
  setCategoria(categoria: any){
    this.categoria.next(categoria);
  }
  setObjeto(objeto: any){
    this.objeto.next(objeto);
  }
  setPropriedades(propriedades: any){
    this.propriedades.next(propriedades);
  }
  setPermissaoSalvar(bool : boolean){
    this.permissao.next(bool);
  }
  clicou(bool : boolean){
    this.clicado.next(bool);
  }
}
