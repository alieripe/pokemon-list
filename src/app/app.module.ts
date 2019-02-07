import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { HttpModule } from '@angular/http';
import { PokemonDataService } from './core/data-services/pokemon.data-service';
import { PaginationComponent } from './shared/components/pagination/pagination.component';
import { LocalStorageModule } from 'angular-2-local-storage';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { PokemonDetailComponent } from './shared/components/pokemon-detail/pokemon-detail.component';
import { PokemonService } from './core/services/pokemon.service';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    NavbarComponent,
    PaginationComponent,
    PokemonDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    LocalStorageModule.forRoot({
      prefix: 'my-app',
      storageType: 'localStorage'
    }), Angular2FontawesomeModule
  ],
  providers: [PokemonDataService, PokemonService],
  bootstrap: [AppComponent],
})
export class AppModule { }
