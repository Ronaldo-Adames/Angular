import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  
  title = 'novo';
  private nome: String;

  // caso o atributo for privado 
  // o HTML não consegue acessar

  // atributo public = HTML consegue acessar
  public titulo: String = 'Olá pessoas!';

  // é uma função especifica do angular
  // ela carrega por primeiro ao carregar a tela
  ngOnInit(): void {

    // sysout versão javaScript
    console.log('Hello world');
    //Exercício 1: Cálculo de Média 
    //this.calculoMedia(10, 10, 10);
    this.media(10, 10, 10);

    // Exercício 2:verificaString
    // só chamando os métodos
    this.verificaString('devs2blu');
    this.verificaString('entra21');

    const montante: number = this.calculaJuros(500, 0.5, 5);
    console.log( "Montante" + montante)

  }


  // criar uma função 
   funcao(): void{
    // const = constante
    const variavel: number = 10;
    const texto: String = "texto";


    let teste = 10;
    // VAR NUNCA MAIS

    // uso o LET quando minha variavel vai ser alterada
    // caso ela não seja, será CONST

    console.log('botão clicado')

  }

  // meu parametro é do tipo number
  private converter(dado: number){

  }

  // Exercícios 
 //  Apenas TS 

  //Exercício 1: Cálculo de Média 

//Crie um método chamado calculadora onde é passado 3 atributos e ao fim imprima a média 

// Dificultando: passe como vetor 
// ou  usando o "private" exemplo abaixo

// private calculoMedia(numUm: number, numDois: number, numTres: number); void;
// pq const? a variavel média não será alterada
// const media: number = (numUm + numDois + numTres) /3;
// console.log(media);


public media(n1, n2, n3){
  let media : number = ((n1 + n2 + n3)/3); 
  console.log(media);
}

// Exercício 2: Manipulação de Strings 

// Crie um método chamado verificaString onde é passado uma string, 
//verifique quantos caracteres possui, e verifique se é igual a “devs2blu” 
 
private verificaString(dado: String) {
  const quantosCaracteres: number = dado.length; // pega a quantidade de caracteres
  // é possivel criar variavel booleana
  let palavraVerdadeira: boolean = false;
  // dois iguais só valida o dado
  // tres iguais valida o dado e o tipo
  if (dado === 'devs2blu'){
    palavraVerdadeira = true;
    console.log('Palavra igual!!');
  } else{
    console.log('palavra diferente')
  }


  }

 // ou 
 //  verificaString(inputString: string): string {
 //    const comprimento = inputString.length;
 //        if (comprimento === 8 && inputString === 'devs2blu') {
 //      return 'A string possui 8 caracteres e é igual a "devs2blu".';
//    } else {
//      return 'A string não possui 8 caracteres ou não é igual a "devs2blu".';
 //   }
 //   console.log(comprimento);
  
// }

//Exercício 3: Cálculo de Juros 

// Crie um método chamado calculaJuros que aceite três parâmetros:
// o valor principal (capital), a taxa de juros (em porcentagem) e o número de meses. 
// O método deve calcular e imprimir o montante total após os juros compostos 

private calculaJuros(valorInicial: number, taxaDeJuros: number, quantidadeDeMeses: number): number{

  taxaDeJuros = taxaDeJuros / 100
  const calc1: number =  (1 - taxaDeJuros)
  const montante:number = valorInicial * Math.pow(calc1, quantidadeDeMeses)   

  return montante;
}

 

// Exercício 4: Contagem de Vogais e Consoantes 

// Crie um método chamado contaVogaisConsoantes que receba uma string como parâmetro
// e conte o número de vogais e consoantes na string. Imprima o número de vogais e consoantes.
// dica: cada exercicio dentro de uma função
// +Devs2Blu: separadas
  

}
