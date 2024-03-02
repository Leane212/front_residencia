import { Injectable } from '@angular/core';

export interface FormularioFE {
  nome: string;
  email: string;
  senha: string;
  nomeUsuario: string;
  telefone: string;
  dataNasc: string;
  endereco: string;
  genero: string;
  profis: string;
  [key: string]: string;
  status: 'iniciado' | 'pendente' | 'enviado';
}
@Injectable({
  providedIn: 'root'
})
export class EventosService {
 
  public formulario: FormularioFE = {
    nome: '',
    email: '',
    senha: '',
    status: 'iniciado',
    nomeUsuario: '',
    telefone: '',
    dataNasc: '',
    endereco: '',
    genero: '',
    profis: '',
    valor: ''
  };

  constructor() {}

  getFormulario(): FormularioFE {
    return this.formulario;
  }

  atualizarFormulario(campo: string, valor: any): void {
    this.formulario[campo] = valor;
  }

  alterarStatus(status: 'pendente' | 'enviado'): void {
    this.formulario.status = status;
  }

}
