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

  // Attributs pour solution 2
  // fullPokemons: IPokemon[] = []
  responseApi: { pokemons: IPokemon[], count: number } = { pokemons: [], count: 0 }

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
      next: (response) => {
        this.responseApi = response
        console.log("RESPONSE -> ", this.responseApi)
      }
    })
  }

  nextPage() {
    this.offset += this.limit
    this.loadFullPokemon()
    this.loadPokemon()
  }

  previousPage() {
    this.offset -= this.limit
    if (this.offset < 0) this.offset = 0
    this.loadFullPokemon()
    this.loadPokemon()
  }

  get pagniationInfo(): { currentPage: number, lastPage: number } {
    // Math.floor : fonction qui renvoie le plus grand entier inférieur ou égal à un nombre.
    const currentPage = Math.floor(this.offset / this.limit) + 1
    // Math.ceil() : fonction qui renvoie le plus petit entier supérieur ou égal à un nombre.
    const lastPage = Math.ceil(this.responseApi.count / this.limit)


    // return { currentPage: currentPage, lastPage: lastPage } // Equivalent de la ligne suivante
    return { currentPage, lastPage }
  }


}
