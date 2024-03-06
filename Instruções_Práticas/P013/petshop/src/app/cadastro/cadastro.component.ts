import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataBaseService } from '../data-base.service';
import { Consulta } from '../petshop.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent implements OnInit{
  formCadastro!: FormGroup;
  

  constructor(private formConstrutor: FormBuilder, private bancoService:DataBaseService) { }
  
  ngOnInit() {
    this.formCadastro = this.formConstrutor.group({
      nomePaciente: ['', Validators.required],
      nomeTutor: ['', Validators.required],
      endereco: ['', Validators.required],
      email: ['', Validators.required],
      data: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      raca: ['', Validators.required],
      mensagem: ['', Validators.required],
    });
    this.bancoService.getTickets();
  }

  onSubmit() {
    console.log(this.formCadastro.value);
  }

  adicionarBilhete() {
    const consultaData: Consulta = {
      nomePaciente: this.formCadastro.get('nomePaciente')?.value,
      nomeTutor: this.formCadastro.get('nomeTutor')?.value,
      endereco: this.formCadastro.get('endereco')?.value,
      email: this.formCadastro.get('email')?.value,
      data: this.formCadastro.get('data')?.value,
      dataNascimento: this.formCadastro.get('dataNascimento')?.value,
      raca: this.formCadastro.get('raca')?.value,
      mensagem: this.formCadastro.get('mensagem')?.value
    };
  
    console.log(consultaData);
    this.bancoService.addConsulta(consultaData);
    this.formCadastro.reset();
  }

}