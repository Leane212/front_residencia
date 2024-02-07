import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoteirosComponent } from './roteiros/roteiros.component';
import { SiteuescComponent } from './siteuesc/siteuesc.component';
import { CadastroComponent } from './cadastro/cadastro.component';


const routes: Routes = [
  { path: 'roteiros', component: RoteirosComponent},
  { path: 'siteuesc', component: SiteuescComponent},
  { path: 'cadastro', component: CadastroComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
