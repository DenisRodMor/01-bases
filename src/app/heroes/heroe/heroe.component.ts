import {Component} from '@angular/core';


@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'
})

export class HeroeComponent{

  nombre: string = "Ironman";
  edad: number = 21;
  funcion: string = "Salvar vidas"

  get nombreCapitalizado():string {
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string{
      return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre(): void{
    this.nombre = "SpiderMan";
  }

  cambiarEdad(): void{
    this.edad = 22;
  }
}
