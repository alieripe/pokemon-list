
import { PokemonDataService } from 'src/app/core/data-services/pokemon.data-service';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Pokemon } from 'src/app/core/models/pokemon.model';
import { Page } from 'src/app/core/models/page.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit, OnDestroy {

  load = true;
  detail: Pokemon;
  page: Page = new Page();
  pokemons: Pokemon[] = [];

  private destroyed: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private pokemonDataService: PokemonDataService) { }

  ngOnInit() {
    this.loadPokemons();
  }

  ngOnDestroy(): void {
    this.destroyed.next(true);
    this.destroyed.complete();
  }

  loadPokemons() {
    this.load = true;
    this.pokemonDataService.getAll(this.page)
      .pipe(takeUntil(this.destroyed))
      .subscribe(response => {
        response.pipe(takeUntil(this.destroyed))
          .subscribe(pokemons => {
            this.pokemons = pokemons;
            this.load = false;
          });
      });
  }

  setFavorite(pokemon: Pokemon) {
    pokemon.favorite = !pokemon.favorite;
    this.pokemonDataService.saveFavorite(pokemon);
  }

  showDetail(pokemon: Pokemon) {
    this.detail = pokemon;
  }

  closeDetail() {
    delete this.detail;
  }
}
