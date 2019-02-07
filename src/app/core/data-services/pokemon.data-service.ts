import { Observable, forkJoin } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { LocalStorageService } from 'angular-2-local-storage';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../models/pokemon.model';
import { Page } from '../models/page.model';

@Injectable()
export class PokemonDataService {

  private urlApi = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: Http, private localStorageService: LocalStorageService, private pokemonService: PokemonService) { }

  getAll(page: Page): Observable<Observable<Pokemon[]>> {
    return this.http.get(this.urlApi, { params : page.getUrlPagination()}).pipe(map(res => {
      const data = res.json();
      page.totalCount = data.count;
      return forkJoin(data.results.map(obj => {
        return this.get(obj.name);
      }));
    }));
  }

  get(name: string): Observable<Pokemon> {
    return this.http.get(this.urlApi + '/' + name).pipe(map(res => {
      return this.pokemonService.dataToPokemon(res.json());
    }));
  }

  saveFavorite(pokemon: Pokemon) {
    this.localStorageService.set(pokemon.name, pokemon.favorite);
  }
}
