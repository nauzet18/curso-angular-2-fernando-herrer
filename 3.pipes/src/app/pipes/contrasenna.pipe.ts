import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasenna'
})
export class ContrasennaPipe implements PipeTransform {

  transform(value: string, active: boolean = true): string {

    if(active)
      return value;
    else
      return value.replace(/./g, '*');

    //explicacion de las expresiones regulares para el replace
    //https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/RegExp
  }

}
