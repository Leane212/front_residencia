import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Consulta } from './petshop.model';


@Injectable({
  providedIn: 'root'
})
export class DataBaseService implements OnInit{

  loadedConsulta: Consulta[] = [];

  constructor(private http: HttpClient) { }



  ngOnInit(): void {

  } 

  addConsulta(consultaData: {nomePaciente: string, 
                            nomeTutor: string, 
                            endereco: string, 
                            email: string, 
                            data: string,
                            dataNascimento: string, 
                            raca: string,
                            mensagem: string }){
  this.http.post(
               'https://petshop-e7ed5-default-rtdb.firebaseio.com/posts.json',
               consultaData
       )
         .subscribe((responseData) => {
      console.log(responseData);
   });
  }

  addMensagem(msgData: {  nome: string, 
                          email: string, 
                          mensagem: string 
                        }) {

        this.http.post('https://petshop-e7ed5-default-rtdb.firebaseio.com/mensagens.json',msgData)
        .subscribe(responseData => {
            console.log(responseData);
        });
  }


  getTickets() {
    return this.http.get< {[key:string]: Consulta}>('https://petshop-e7ed5-default-rtdb.firebaseio.com/posts.json',
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
    return this.http.delete('https://petshop-e7ed5-default-rtdb.firebaseio.com/posts.json');
  }

  getTicket2() {
    return this.http.get('https://petshop-e7ed5-default-rtdb.firebaseio.com/posts.json',
    {
      params: new HttpParams().set('print', 'pretty')
    }
  );
  }

  getTicket(id:string) {
    return this.http.get<Consulta>(`https://petshop-e7ed5-default-rtdb.firebaseio.com/posts/${id}.json`);
  }

  editarTicket(id:string, consultaData: { nomePaciente: string, 
                                          nomeTutor: string, 
                                          endereco: string, 
                                          email: string,
                                          data: string, 
                                          dataNascimento: string, 
                                          raca: string ,
                                          mensagem: string;
                                      })
  {
    return this.http.put(`https://petshop-e7ed5-default-rtdb.firebaseio.com/posts/${id}.json`, consultaData, {observe: 'response'});
  }
}
