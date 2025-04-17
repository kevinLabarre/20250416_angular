import { Component, Input } from '@angular/core';
import { IPokemon } from '../../interfaces/IPokemon';

@Component({
  selector: 'app-pokemon-card2',
  imports: [],
  templateUrl: './pokemon-card2.component.html',
  styleUrl: './pokemon-card2.component.css'
})
export class PokemonCard2Component {

  @Input() pokemon: IPokemon | undefined

}
