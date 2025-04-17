import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable, switchMap } from 'rxjs';
import { IPokemonResponse } from '../../interfaces/IResumePokemon';
import { IPokemon } from '../../interfaces/IPokemon';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'https://pokeapi.co/api/v2';


  getResumePokemons(limit: number, offset: number): Observable<IPokemonResponse> {
    return this.http.get<IPokemonResponse>(`${this.baseUrl}/pokemon?limit=${limit}&offset=${offset}`)
  }

  getByName(name: string): Observable<IPokemon> {
    return this.http.get<IPokemon>(`${this.baseUrl}/pokemon/${name}`)
  }

  getPokemons(limit: number, offset: number): Observable<{ pokemons: IPokemon[], count: number }> {
    return this.getResumePokemons(limit, offset).pipe(
      switchMap(data => {
        const pokemonRequests = data.results.map(pokemon => this.getByName(pokemon.name));
        return forkJoin(pokemonRequests).pipe(
          map(pokemons => { return { pokemons: pokemons, count: data.count } })
        )
      })
    )
  }

}
