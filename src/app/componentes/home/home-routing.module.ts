import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';




const routes: Routes = [
{ path: '', component:HomeComponent }
// caso tivesse filhos
// { path: 'filho', component: HomeFilhoComponetn}

];

// principal arquivo de roteamento
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
