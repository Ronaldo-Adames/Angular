import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { CadastrarProdutoComponent } from './componentes/cadastrar-produto/cadastrar-produto.component';


// aqui colocamos nossas rotas
const routes: Routes = [
//  criar uma rota  - objeto de rotas
//  1 - zerar rotas

{ path: '', pathMatch: 'full', redirectTo: 'home'     },

// 2 - criar a rota da home
// defino rota e defino o componente
{ path: 'home',
loadChildren: () => import('./componentes/home/home.module').then((m)=> m.HomeModule)},

{path: 'novo',
loadChildren:() =>
import('./componentes/cadastrar-produto/cadastrar-produto.module'). then(
  (m) => m.CadastrarProdutoModule
)
},
];



// principal arquivo de roteamento
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
