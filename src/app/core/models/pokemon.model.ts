import { PokemonType } from './pokemon-type.model';
import { PokemonAbility } from './pokemon-ability.model';

export class Pokemon {
  id: number;
  name: string;
  height?: number;
  weight?: number;
  baseExperience?: number;
  types?: PokemonType[];
  abilities?: PokemonAbility[];
  spriteUrl?: string;
  favorite = false;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
