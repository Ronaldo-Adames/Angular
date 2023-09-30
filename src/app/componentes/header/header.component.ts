import { Component, OnInit } from '@angular/core';

@Component({


  // 
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public bntInicio: String = 'Inicio';
  public bntCadastrar: String = 'Cadastrar produtos';
  

  constructor() { }

  ngOnInit(): void {
  }

}
