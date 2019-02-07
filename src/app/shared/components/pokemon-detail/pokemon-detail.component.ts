import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from 'src/app/core/models/pokemon.model';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  @Input() pokemon: Pokemon;

  @Output() close: EventEmitter<void> = new EventEmitter();
  @Output() favorite: EventEmitter<Pokemon> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  setFavorite(pokemon: Pokemon) {
    this.favorite.emit(pokemon);
  }
}
