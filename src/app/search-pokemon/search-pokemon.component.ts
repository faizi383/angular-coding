import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../services/pokemon.service';
import {Pokemon} from '../classes/pokemon';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css']
})
export class SearchPokemonComponent implements OnInit {

  pokemons: Pokemon[];
  pokemon: any;
  pokemonss: Observable<Pokemon[]>;

  constructor(private pokemonService: PokemonService) { }

  getPokemons() {
    this.pokemonService.getPokemons()
      .subscribe(data => {
        this.pokemonss = data.results;
      });
  }

  searchPokemon(pokemonName) {
    this.pokemonService.get_pokemon(pokemonName).subscribe((res) => {
      console.log(res);
      this.pokemon = res;
    });
    /*this.pokemonService.searchPokemon(pokemonName)
      .subscribe(data => this.pokemons = data.pokemonName);
     */
  }

  ngOnInit() {
    this.getPokemons();
  }
}
