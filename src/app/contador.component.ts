import {Component} from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `

    <h1>{{titulo}}</h1>
    <h3>La base es: <strong>{{base}}</strong></h3>

    <button (click)="acumular(+base)"> + {{base}}</button>

    <span>{{numero}}</span>

    <button (click)="acumular(-base)">- {{base}}</button>
  `
})

export class ContadorComponent{ //el export se utiliza porque lo quiero usar en otros lugares fuera de este archivo
  titulo: string = 'Bases de Angular';
  numero: number =  10;
  base  : number =  5;

  acumular(valor:number){
    this.numero += valor; //+= es un operador de typescript para sumar
  }
}
