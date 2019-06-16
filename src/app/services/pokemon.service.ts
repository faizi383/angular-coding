import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class PokemonService {

    private url = 'https://pokeapi.co/api/v2/pokemon/';

    constructor(private http: HttpClient) {
    }

    get_pokemon(name: string) {
        return this.http.get(this.url + name);
    }

}
