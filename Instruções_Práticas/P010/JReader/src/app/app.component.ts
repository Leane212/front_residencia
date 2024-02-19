import { Component } from '@angular/core';
import { LeituraService } from './leitura.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'JReader';
  constructor(private leituraService: LeituraService) {
    this.setupPermissaoListener();
  }

  setupPermissaoListener() {
    this.leituraService.permissao$.subscribe(permissao => {
      const addButton = document.getElementById("add") as HTMLButtonElement;
      if (addButton) {
        addButton.disabled = permissao;
      }
    });
  }

  async getArquivo() {
    const fileInput = document.getElementById('arqv') as HTMLInputElement;
    const file = fileInput.files?.[0];

    if (!file) {
      console.warn("Nenhum arquivo selecionado.");
      return;
    }

    try {
      const fileContents = await this.lerArquivo(file);
      this.leituraService.setJson(JSON.parse(fileContents));
    } catch (error) {
      console.warn("Erro ao ler o arquivo:", error);
    }
  }

  lerArquivo(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.onerror = () => {
        fileReader.abort();
        reject(new DOMException("Problem parsing input file."));
      };

      fileReader.onload = () => {
        resolve(fileReader.result as string);
      };

      fileReader.readAsText(file);
    });
  }

  click() {
    this.leituraService.clicou(true);
  }
  
}
