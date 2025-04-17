export interface IPokemonResponse {
  count: number,
  results: IResumePokemon[]
}

export interface IResumePokemon {
  name: string,
  url: string
}
