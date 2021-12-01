import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonSelectedComponent } from './pokemon-selected/pokemon-selected.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { SelectedGuardGuard } from './selected-guard.guard';

const routes: Routes = [
  {path: '', component: PokemonComponent, pathMatch:'full'},
  {path: 'selected', component: PokemonSelectedComponent, canActivate: [SelectedGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
