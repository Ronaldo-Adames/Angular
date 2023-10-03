import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
selector: 'app-cadastrar-produto',
templateUrl: './cadastrar-produto.component.html',
styleUrls: ['./cadastrar-produto.component.scss']
})
export class CadastrarProdutoComponent implements OnInit {

// declarar o formulario - tipo FormGroup
public formularioProduto: FormGroup
// Autowired
// injetando bibliotecas
constructor(private formBuilder: FormBuilder) { }


ngOnInit(): void {
//chamar a função para executar
this.createForm()

}

// começa o formulario dentro do typescript
// criar (constroi) uma função que cria o formulario
private createForm() {

//1 - chamar o atributo do formulario
// 2 - construir os atributos do formulario
this.formularioProduto = this.formBuilder.group({
// inputs (atributos) do nosso formulario
name:'',
description:'',
code:'',
costPrice:'',
salePrice:'',
preparationTime:'',
productType:'',

})


// 3 - criart no html o formulario

}

enviarFormulario(){
// ver os dados que foram preenchido
console.log(this.formularioProduto.value)

}

}
