import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Nauzet';
  nombre2= 'Nauzet Melian baTista';
  array:number[] = [1,2,3,4,5,6,7,8,9,10];
  PI = Math.PI;
  a:number = 0.234;
  salario:number = 1234.5;

  objheroe= {
    nombre: 'nauzet',
    edad: 20,
    clave: 'dios',
    direccion: {
      calle: 'en todos lados',
      casa: 'sin casa'
    }
  };

  valorPromesa = new Promise( ( resolve, reject )=> {
    setTimeout( ()=> resolve('llego la data!') ,3500 );
  }
  );

  fecha = new Date();
}
