import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wiki';
  constructor(public apiService: ApiService){}
  resultados: any[] = [];

  pesquisa="";
  getBusca(busca: string) {
    this.apiService.getData(busca).subscribe((res: any) => {
      this.resultados = res["query"]["search"];
    });
  }
}
