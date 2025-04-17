import { Component, OnInit } from '@angular/core';
import { IResumePokemon } from '../../interfaces/IResumePokemon';
import { PokemonService } from '../../services/pokemon/pokemon.service';
import { PokemonCardComponent } from "../../components/pokemon-card/pokemon-card.component";
import { IPokemon } from '../../interfaces/IPokemon';
import { PokemonCard2Component } from "../../components/pokemon-card2/pokemon-card2.component";

@Component({
  selector: 'app-pokedex',
  imports: [PokemonCardComponent, PokemonCard2Component],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent implements OnInit {

  // Attribut pour solution 1
  pokemons: IResumePokemon[] = []

  // Attribut pour solution 1
  fullPokemons: IPokemon[] = []

  limit = 20;
  offset = 0;

  constructor(private service: PokemonService) { }

  ngOnInit(): void {
    this.loadPokemon()
    this.loadFullPokemon()
  }

  // SOLUTION 1
  loadPokemon() {
    this.service.getResumePokemons(this.limit, this.offset).subscribe({
      next: (response) => this.pokemons = response.results
    })
  }

  // SOLUTION 2
  loadFullPokemon() {
    this.service.getPokemons(this.limit, this.offset).subscribe({
      next: (response) => this.fullPokemons = response.pokemons
    })
  }


}
