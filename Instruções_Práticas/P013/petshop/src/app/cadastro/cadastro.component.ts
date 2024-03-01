import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataBaseService } from '../data-base.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  formCadastro: FormGroup;
  constructor(private formConstrutor: FormBuilder, private bancoService:DataBaseService) {
    this.formCadastro = this.formConstrutor.group({
      nomePaciente: ['', Validators.required],
      nomeTutor: ['', Validators.required],
      endereco: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      dataNascimento: ['', Validators.required],
      raca: ['', Validators.required],
      mensagem: ['', Validators.required]
    });
    this.bancoService.getTickets();
  }

  onSubmit() {
    console.log(this.formCadastro.value);
  }

  adicionarBilhete() {
    console.log(this.formCadastro.value);
    this.bancoService.addTicket(this.formCadastro.value);
    this.formCadastro.reset();
  }

}
