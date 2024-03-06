import { Component, OnInit } from '@angular/core';
import { DataBaseService } from '../data-base.service';
import { Consulta } from '../petshop.model';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit{
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

  editarBilhete(id:any){
    console.log(id);

  }

  apagarTudo(){
    this.bancoService.apagarTodosTickets().subscribe( () => {
      console.log('Apagou tudo');
      this.loadedConsulta = [];
    });
  }
  

}
