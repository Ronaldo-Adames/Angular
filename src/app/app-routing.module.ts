import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';


// aqui colocamos nossas rotas
const routes: Routes = [
//  criar uma rota  - objeto de rotas
//  1 - zerar rotas

{ path: '', pathMatch: 'full', redirectTo: 'home'     },

// 2 - criar a rota da home
// defino rota e defino o componente
{ path: 'home', component: HomeComponent}
];


// principal arquivo de roteamento
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
