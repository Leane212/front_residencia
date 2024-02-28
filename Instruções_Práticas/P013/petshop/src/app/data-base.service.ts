import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Consulta } from './petshop.model';


@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  loadedConsulta: Consulta[] = [];

  constructor(private http: HttpClient) { }



  ngOnInit(): void {

  } 

  addTicket(ticketData: {  NomePassageiro: string, 
                                numeroVoo: string, 
                                dataPartida: string, 
                                dataChegada: string, 
                                aeroportoPartida: string, 
                                aeroportoChegada: string }) {

    this.http.post(
      'https://residencia-35ad6-default-rtdb.firebaseio.com/posts.json',
       ticketData)
      .subscribe((responseData: any) => {
        console.log(responseData);
      });
  }

  addMensagem(msgData: {  nome: string, 
                          email: string, 
                          mensagem: string 
                        }) {

        this.http.post('https://residencia-35ad6-default-rtdb.firebaseio.com/mensagens.json',msgData)
        .subscribe(responseData => {
            console.log(responseData);
        });
  }


  getTickets() {
    //generics da interface Ticket
    //vem do firebase nesse formato
    //ahsduiashuhui:Object
    //dasdasdasdasd:Object
    return this.http.get< {[key:string]: Consulta}>('https://residencia-35ad6-default-rtdb.firebaseio.com/posts.json',
      {
        params: new HttpParams().set('print', 'pretty')
      }
    )
    .pipe(
      map( (responseData) => {
        const postArray:Consulta[] = [];
        for (const key in responseData) {
            if ((responseData).hasOwnProperty(key)){
              postArray.push({...(responseData as any)[key], id: key});
            }
        }
        return postArray;
      }
      )
    );
  }

  apagarTodosTickets() {
    return this.http.delete('https://residencia-35ad6-default-rtdb.firebaseio.com/posts.json');
  }

  getTicket2() {
    return this.http.get('https://residencia-35ad6-default-rtdb.firebaseio.com/posts.json',
    {
      params: new HttpParams().set('print', 'pretty')
    }
  );
  }

  getTicket(id:string) {
    return this.http.get<Consulta>(`https://residencia-35ad6-default-rtdb.firebaseio.com/posts/${id}.json`);
  }

  editarTicket(id:string, ticketData: {   NomePassageiro: string, 
                                          numeroVoo: string, 
                                          dataPartida: string, 
                                          dataChegada: string, 
                                          aeroportoPartida: string, 
                                          aeroportoChegada: string 
                                      }
                ) {
    return this.http.put(`https://residencia-35ad6-default-rtdb.firebaseio.com/posts/${id}.json`, ticketData, {observe: 'response'});
  }
}
