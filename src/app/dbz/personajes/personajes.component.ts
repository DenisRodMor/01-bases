import { Component, Input} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

//@Input()  personajes: Personaje []=[];

get personajes(){
  return this.dbzservice.personajes; //el personajes es el get que tenemos en el servicio
}

  constructor(public dbzservice: DbzService){

  }
}
