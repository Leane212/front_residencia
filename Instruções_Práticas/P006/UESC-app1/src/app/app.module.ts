import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerMenuNoticiasDestaquesComponent } from './container-menu-noticias-destaques/container-menu-noticias-destaques.component';
import { ContainerServicosResultadosComponent } from './container-servicos-resultados/container-servicos-resultados.component';
import { DestaquesComponent } from './destaques/destaques.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { ServicosComponent } from './servicos/servicos.component';
import { FooderComponent } from './fooder/fooder.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerMenuNoticiasDestaquesComponent,
    ContainerServicosResultadosComponent,
    DestaquesComponent,
    NoticiasComponent,
    ResultadosComponent,
    ServicosComponent,
    FooderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
