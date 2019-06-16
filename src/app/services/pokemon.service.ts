import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pokemon} from '../classes/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {
  }

  getPokemons(): Observable<any> {
    return this.http.get<Pokemon[]>(this.url);
  }

  searchPokemon(pokemonName): Observable<any> {
    return this.http.get<Pokemon[]>(`${this.url}/${pokemonName}`);
  }

  get_pokemon(name: string) {

    return this.http.get('https://pokeapi.co/api/v2/pokemon/' + name);
  }

}
