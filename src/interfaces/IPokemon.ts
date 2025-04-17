export interface IPokemon {
  name: string;
  sprites: Sprites;
  id: number;
  types: Type[];
  height: number;
  weight: number;
}

interface Sprites {
  front_default: string;
}

interface Type {
  type: {
    name: string;
  };
}
