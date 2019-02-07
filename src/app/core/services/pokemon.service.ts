import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { PokemonType } from '../models/pokemon-type.model';
import { PokemonAbility } from '../models/pokemon-ability.model';
import { Pokemon } from '../models/pokemon.model';

@Injectable()
export class PokemonService {

  constructor(private localStorageService: LocalStorageService) { }

  dataToPokemon(data: any): Pokemon {
    const pokemon = new Pokemon(data.name, data.id);
    pokemon.height = data.height;
    pokemon.weight = data.weight;
    pokemon.baseExperience = data.base_experience;
    pokemon.spriteUrl = data.sprites.front_default;
    pokemon.favorite = !!this.localStorageService.get(pokemon.name);
    pokemon.types = data.types.map(type => {
      return new PokemonType(type.type.name);
    });
    pokemon.abilities = data.abilities.map(ability => {
      return new PokemonAbility(ability.ability.name);
    });
    return pokemon;
  }
}
