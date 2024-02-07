import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoteirosComponent } from './roteiros/roteiros.component';
import { SiteuescComponent } from './siteuesc/siteuesc.component';
import { ContainerMenuNoticiasDestaquesComponent } from './container-menu-noticias-destaques/container-menu-noticias-destaques.component';
import { ContainerServicosResultadosComponent } from './container-servicos-resultados/container-servicos-resultados.component';
import { DestaquesComponent } from './destaques/destaques.component';
import { FooderComponent } from './fooder/fooder.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { ServicosComponent } from './servicos/servicos.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    RoteirosComponent,
    SiteuescComponent,
    ContainerMenuNoticiasDestaquesComponent,
    ContainerServicosResultadosComponent,
    DestaquesComponent,
    FooderComponent,
    NoticiasComponent,
    ResultadosComponent,
    ServicosComponent,
    CadastroComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule
    
  ],
  
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],

  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
