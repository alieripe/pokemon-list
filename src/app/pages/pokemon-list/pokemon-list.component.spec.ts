import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { Angular2FontawesomeModule } from 'angular2-fontawesome';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { PokemonDataService } from 'src/app/core/data-services/pokemon.data-service';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonListComponent, PokemonListComponent],
      imports: [
        Angular2FontawesomeModule,
        AppRoutingModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create',
    inject([PokemonDataService], (pokemonDataService: PokemonDataService) => {
      expect(component).toBeTruthy();
    })
  );
});
