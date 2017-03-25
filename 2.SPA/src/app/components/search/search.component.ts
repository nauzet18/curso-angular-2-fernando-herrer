import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HeroesService, Heroe} from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  heroes:Heroe[] = [];
  term:string = '';
  constructor( private _heroesServices:HeroesService,
               private activatedRoute:ActivatedRoute
             ) {
  }

  ngOnInit() {
    //Inicialmente se ne había pasado poner la captura del parametro en el constructor.
    //Y la llamada al servicio de heroes aqui.
    //Pero esto hacia que funcionara mal, por que no siemrpe la promesa de la obtencion del parametro
    //había terminado. Y se buscaba por el anterior termino.
    this.activatedRoute.params.subscribe( params =>{
      this.term = params['term'];
      this.heroes = this._heroesServices.searchHeroes( this.term );
      console.log("ngOnInit heroes encontrados por: "+this.term);
      console.log(this.heroes);

      }
    )
  }

}
