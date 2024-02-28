import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataBaseService } from '../data-base.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {
  formCadastro!: FormGroup;
  id:string = '';
  editadoSucesso:boolean = false;
  
  constructor(private formConstrutor: FormBuilder, private bancoService:DataBaseService, private rotas:Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.formCadastro = this.formConstrutor.group({
      nomePaciente: ['', Validators.required],
      nomeTutor: ['', Validators.required],
      endereco: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      dataNascimento: ['', Validators.required],
      raca: ['', Validators.required],
      mensagem: ['', Validators.required]
    });
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.getTicket(this.id);
  }

  getTicket(id: any) {
    console.log("id-->"    + id);
    this.bancoService.getTicket(id).subscribe(responseData => {
      console.log(responseData);
      this.formCadastro.setValue(responseData);
    });
  }

  salvarTicket() {
    console.log("salvar ticket: " + this.formCadastro.value);
    this.bancoService.editarTicket(this.id, this.formCadastro.value).subscribe(responseData => {
      if(responseData.status == 200){
        this.editadoSucesso = true;
        this.rediracionaPrincipal();
      }
    });
  }

  rediracionaPrincipal(){
    setTimeout(() => {
     this.rotas.navigate(['listarTicket']);
    }, 2000);
    
  }
}
