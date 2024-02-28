import { Component } from '@angular/core';
import { LeituraService } from './leitura.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'JReader';
  constructor(private leituraService : LeituraService){
    this.leituraService.permissao$.subscribe(permissao => {
      (<HTMLButtonElement>document.getElementById("add"))!.disabled = permissao;
    });
  }
 
  lerArquivo(fileTobeRead: File, fileReader: FileReader){
    return new Promise((resolve, reject) => {
      fileReader.onerror = () => {
        fileReader.abort();
        reject(new DOMException("Problem parsing input file."));
      };
  
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.readAsText(fileTobeRead);
    });
  };
  async getArquivo(){
    var fileSelected = (<HTMLInputElement>document.getElementById('arqv'));
    var fileTobeRead = fileSelected.files![0];
    var fileReader = new FileReader();
    try {
      const fileContents = await this.lerArquivo(fileTobeRead, fileReader) ;
      this.leituraService.setJson(JSON.parse(<string>fileContents));
    } catch (e:any) {
      console.warn(e.message);
    }
  }
  click(){
    this.leituraService.clicou(true);
  }
  
}
