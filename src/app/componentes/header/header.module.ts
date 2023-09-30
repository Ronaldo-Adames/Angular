import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

// Module importar bibliotecas dentro do modulo
// e essas bibliotecas serão utilizadas pelos 
// componentes que foram declarados

// meu modulo pode ter varios componentes
// mas aqui vamos trabalhar com ideia de somente um

@NgModule({
  //Modulo declara componentes aos quais estão no escopos
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [HeaderComponent]


})
export class HeaderModule { }
