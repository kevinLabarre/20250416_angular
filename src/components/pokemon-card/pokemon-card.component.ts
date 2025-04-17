import { Component, Input, OnInit } from '@angular/core';
import { IResumePokemon } from '../../interfaces/IResumePokemon';
import { PokemonService } from '../../services/pokemon/pokemon.service';
import { IPokemon } from '../../interfaces/IPokemon';

@Component({
  selector: 'app-pokemon-card',
  imports: [],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent implements OnInit {

  @Input() resumePokemon: IResumePokemon | undefined
  pokemon: IPokemon | undefined

  constructor(private service: PokemonService) { }

  ngOnInit(): void {
    if (this.resumePokemon) {
      this.service.getByName(this.resumePokemon.name).subscribe({
        next: (response) => {
          this.pokemon = response
          console.log(this.pokemon)
        },
        error: (error) => console.error(error)
      })
    }
  }
}
