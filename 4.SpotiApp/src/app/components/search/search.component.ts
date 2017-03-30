import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  term:string = '';
  constructor( private _spotifyService:SpotifyService ) { }

  ngOnInit() {
  }

  searchByArtist(){
    this._spotifyService.getArtists(this.term).subscribe();
  }

}
