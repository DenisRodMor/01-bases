import { Component } from '@angular/core';

interface Personaje {
  nombre:string;
  poder:number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent  {

  nuevo:Personaje={
    nombre: "MrSatán",
    poder: 100
  }

  cambiarNombre(event : any){
    console.log(event);

  }

  agregar(){
    console.log(this.nuevo);
  }
}
