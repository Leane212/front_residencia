import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './editar/editar.component';
import { DetalhamentoComponent } from './detalhamento/detalhamento.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ListarComponent,
    EditarComponent,
    DetalhamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
