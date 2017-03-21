import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HeroesService, Heroe} from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  heroe:any = {};
  constructor( private _heroesServices:HeroesService,
               private activatedRoute:ActivatedRoute
             ) {
    this.activatedRoute.params.subscribe( params =>{
      this.heroe = this._heroesServices.getHeroe( params['id'] )
    }
   )
  }

  ngOnInit() {
  }

}
