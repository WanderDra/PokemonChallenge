import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { PokemonResponse } from './pokemon.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PokemonAPIService {

  selectedPokemon?: PokemonResponse;

  constructor(private http: HttpClient) { }

  getPokemon(name: string): Observable<PokemonResponse>{
    return this.http.get(['https://pokeapi.co/api/v2/pokemon', name.toLowerCase()].join('/')).pipe(
      map((data: Object) => {
        return data as PokemonResponse;
      })
    );
  }

}
