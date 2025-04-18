import { IProduct } from "./IProduct";

export interface IProductPaginate {
  data: IProduct[];
  first: number;
  prev: number;
  next: number;
  last: number;
  pages: number;  // nbr total de pages
  items: number;  // Nbr total de produits
}
