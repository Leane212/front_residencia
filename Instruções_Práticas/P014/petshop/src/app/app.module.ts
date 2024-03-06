import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './editar/editar.component';
import { DetalhamentoComponent } from './detalhamento/detalhamento.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AutenticaInterceptor } from './autentica.interceptor';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'listar', component: ListarComponent },
  { path: 'detalhamento', component: DetalhamentoComponent},
  { path: 'editarTicket/:id', component: EditarComponent },
  { path: 'autentica', component: AuthComponent },
  { path: '', redirectTo: '/autentica', pathMatch: 'full' },
];


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ListarComponent,
    EditarComponent,
    DetalhamentoComponent,
    HomeComponent,
    AuthComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    provideAnimationsAsync(),
    {provide: HTTP_INTERCEPTORS, useClass: AutenticaInterceptor, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
