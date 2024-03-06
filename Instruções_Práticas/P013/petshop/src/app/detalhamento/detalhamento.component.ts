import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataBaseService } from '../data-base.service';
import { Consulta } from '../petshop.model';

@Component({
  selector: 'app-detalhamento',
  templateUrl: './detalhamento.component.html',
  styleUrl: './detalhamento.component.css'
})
export class DetalhamentoComponent {
  formContato: FormGroup | undefined;
  loadedConsulta:Consulta[] = [];
  
  constructor(private bancoService:DataBaseService) { }

  ngOnInit(): void {
    this.getTickets();
  }



  getTickets() {
    this.bancoService.getTickets().subscribe(responseData => {
      console.log(responseData);
      this.loadedConsulta = responseData;
      console.log(this.loadedConsulta);
    });
  }



}
