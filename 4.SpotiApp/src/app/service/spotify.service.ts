import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {


  artists:any[] = [];
  urlSearch:string = 'https://api.spotify.com/v1/search';
  urlArtist:string = 'https://api.spotify.com/v1/artists/';

  constructor( private http:Http ) { }

  getArtists( term:string) {
      //curl -X GET "https://api.spotify.com/v1/search?q=Muse&type=track,artist&market=US" -H "Accept: application/json"
      let query = `q=${ term }&type=artist`;
      let url = this.urlSearch + '?' + query;

      return this.http.get( url ).map( res=>{
          this.artists= res.json().artists.items;
          return this.artists;
        }
      );

  }

  getArtist( id:string ){
    //curl -X GET "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg" -H "Accept: application/json"
    let url = this.urlArtist + id;

    return this.http.get( url ).map( res=>{
        return res.json();
      }
    );

  }

  getTop( id:string ){
    //curl -X GET "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/top-tracks?country=ES" -H "Accept: application/json"
    let url = this.urlArtist + id +'/top-tracks?country=ES';

    return this.http.get( url ).map( res=>{
        return res.json().tracks;
      }
    );

  }

}
