import {Component, OnInit} from '@angular/core';
import {PokemonService} from '../services/pokemon.service';
import {Item} from '../classes/item';
import {Pokemon} from '../classes/pokemon';

@Component({
    selector: 'app-search-pokemon',
    templateUrl: './search-pokemon.component.html',
    styleUrls: ['./search-pokemon.component.css']
})
export class SearchPokemonComponent implements OnInit {

    private pokemon: any;
    public items: Item[] = [];
    public isSelected: boolean;

    constructor(private pokemonService: PokemonService) {

    }

    searchPokemon(pokemonName) {
        this.pokemonService.get_pokemon(pokemonName).subscribe((res) => {
            this.pokemon = res;
            for (var i = 0; i < this.items.length; i++) {
                if (this.items[i].pokemon.name === pokemonName) {
                    this.isSelected = true;
                    break;
                }
            }
        });
    }

    ngOnInit() {
        this.loadCart();
    }

    addToPokeball(name: string) {
        let item: Item = {
            pokemon: this.pokemon
        };
        if (localStorage.getItem('poke-ball') == null) {
            let cart: any = [];
            cart.push(JSON.stringify(item));
            localStorage.setItem('poke-ball', JSON.stringify(cart));
        } else {
            let cart: any = JSON.parse(localStorage.getItem('poke-ball'));
            let index: number = -1;
            for (var i = 0; i < cart.length; i++) {
                let item: Item = JSON.parse(cart[i]);
                if (item.pokemon.name === name) {
                    index = i;
                    break;
                }
            }
            if (index === -1) {
                cart.push(JSON.stringify(item));
                localStorage.setItem('poke-ball', JSON.stringify(cart));
                console.log(cart);
            } else {
                let item: Item = JSON.parse(cart[index]);
                // item.quantity += 1;
                cart[index] = JSON.stringify(item);
                localStorage.setItem('poke-ball', JSON.stringify(cart));
            }
        }
        /*
        this.loadCart();
        console.log(localStorage.getItem('poke-ball'));
        */
    }

    loadCart(): void {
        this.items = [];
        let cart = JSON.parse(localStorage.getItem('poke-ball'));
        console.log(cart.length);
        for (var i = 0; i < cart.length; i++) {
            let item = JSON.parse(cart[i]);
            console.log(item.pokemon.name);
            this.items.push({
                pokemon: item.pokemon
            });
        }
    }
}
