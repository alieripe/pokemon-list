import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';


const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent,
    data: { title: 'Pokémon List' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
