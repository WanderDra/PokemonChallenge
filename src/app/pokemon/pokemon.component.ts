import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { PokemonAPIService } from '../pokemon-api.service';
import { PokemonResponse } from '../pokemon.interface';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  starterPokemon: Array<string> = [ "Bulbasaur", "Squirtle", "Charmander" ]
  pokemonList: Array<PokemonResponse> = [];

  constructor(
    public dataAPI: PokemonAPIService, 
    public dialog: MatDialog,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.starterPokemon.forEach(name => {
      this.dataAPI.getPokemon(name).subscribe((data) => {
        this.pokemonList.push(data);
      });
    })
    
  }

  onItemClick(name:string){
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        name: name
      }
    })
  }

  onSelectClick(){
    this.router.navigate(['selected']);
  }

}
