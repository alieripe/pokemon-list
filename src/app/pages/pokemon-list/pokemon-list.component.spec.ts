import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { Angular2FontawesomeModule } from 'angular2-fontawesome';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { PokemonDataService } from 'src/app/core/data-services/pokemon.data-service';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Page } from 'src/app/core/models/page.model';
import { PaginationComponent } from 'src/app/shared/components/pagination/pagination.component';
import { PokemonDetailComponent } from 'src/app/shared/components/pokemon-detail/pokemon-detail.component';
import { Pokemon } from 'src/app/core/models/pokemon.model';
import { HttpModule } from '@angular/http';
import { LocalStorageService, LocalStorageModule } from 'angular-2-local-storage';
import { PokemonService } from 'src/app/core/services/pokemon.service';

describe('PokemonListComponent', () => {
  let componentList: PokemonListComponent;
  let componentPagination: PaginationComponent;
  let componentDetail: PokemonDetailComponent;
  let fixtureList: ComponentFixture<PokemonListComponent>;
  let fixturePagination: ComponentFixture<PaginationComponent>;
  let fixtureDetail: ComponentFixture<PokemonDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonListComponent, PaginationComponent, PokemonDetailComponent],
      imports: [
        Angular2FontawesomeModule,
        AppRoutingModule,
        HttpModule,
        LocalStorageModule.forRoot({
          prefix: 'my-app',
          storageType: 'localStorage'
        }),
      ],
      providers: [PokemonDataService, LocalStorageService, PokemonService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixtureList = TestBed.createComponent(PokemonListComponent);
    componentList = fixtureList.componentInstance;

    fixturePagination = TestBed.createComponent(PaginationComponent);
    componentPagination = fixturePagination.componentInstance;
    componentPagination.page = new Page();

    fixtureDetail = TestBed.createComponent(PokemonDetailComponent);
    componentDetail = fixtureDetail.componentInstance;
    componentDetail.pokemon = new Pokemon('Pikachu', 1);

    fixtureList.detectChanges();
  });

  it('should create',
    inject([PokemonDataService], (pokemonDataService: PokemonDataService) => {
      expect(componentList).toBeTruthy();
    })
  );
});
