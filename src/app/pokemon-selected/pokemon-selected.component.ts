import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonAPIService } from '../pokemon-api.service';
import { PokemonResponse } from '../pokemon.interface';

@Component({
  selector: 'app-pokemon-selected',
  templateUrl: './pokemon-selected.component.html',
  styleUrls: ['./pokemon-selected.component.scss']
})
export class PokemonSelectedComponent implements OnInit {

  pokemon: PokemonResponse;

  constructor(
    private dataAPI: PokemonAPIService,
    private router: Router
    ) {
    this.pokemon = dataAPI.selectedPokemon!;
  }

  ngOnInit(): void {
  }

  onReturnClick(){
    this.router.navigate([''])
  }

}
