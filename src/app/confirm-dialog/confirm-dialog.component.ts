import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonAPIService } from '../pokemon-api.service';
import { PokemonResponse } from '../pokemon.interface';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  pokemon?: PokemonResponse

  constructor(
    private dataAPI: PokemonAPIService, 
    @Inject(MAT_DIALOG_DATA) public data: {name: string},
    private router: Router
    ) { }

  ngOnInit(): void {
    this.dataAPI.getPokemon(this.data.name).subscribe(data => {
      this.pokemon = data;
    })
  }

  onConfirmClick(){
    this.dataAPI.selectedPokemon = this.pokemon;
    this.router.navigate(['selected']);
  }

}
