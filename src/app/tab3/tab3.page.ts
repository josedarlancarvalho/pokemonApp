// src/app/pages/tab3/tab3.page.ts

import { Component, OnInit } from '@angular/core';
import { PokeAPIService } from '../../app/services/poke-api.service';

interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  victories: number;
  defeats: number;
  ties: number;
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  pokemonList: Pokemon[] = [];

  constructor(private pokeApiService: PokeAPIService) {}

  ngOnInit() {
    this.loadPokemonList();
  }

  loadPokemonList() {
    this.pokeApiService.getPokemonList().subscribe((data: any) => {
      const results = data.results;

      results.forEach((pokemon: any, index: number) => {
        const id = index + 1;
        this.pokeApiService.getPokemonDetails(id).subscribe((details: any) => {
          const pokemonDetails: Pokemon = {
            id,
            name: pokemon.name,
            sprites: details.sprites,
            victories: 0,
            defeats: 0,
            ties: 0,
          };

          this.pokemonList.push(pokemonDetails);
        });
      });
    });
  }
}
