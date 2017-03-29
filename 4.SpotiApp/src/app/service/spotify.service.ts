import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artists:any[] = [];
  urlSearch:string = 'https://api.spotify.com/v1/search';

  constructor( private http:Http ) { }

  getArtist( term:string) {
      //curl -X GET "https://api.spotify.com/v1/search?q=Muse&type=track,artist&market=US" -H "Accept: application/json"
      let query = `q=${ term }&type=artist`;
      let url = this.urlSearch + '?' + query;

      return this.http.get( url ).map( res=>{
          this.artists= res.json().artists.items;
          console.log( this.artists );

          return this.artists;
        }
      );

  }
}
