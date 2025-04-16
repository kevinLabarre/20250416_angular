import { Injectable } from '@angular/core';
import { products } from '../../../productsDB';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  // Les méthode couremment utilisées sur les framework
  //  -> .map()
  //  -> .filter()


  // On travaille sur l'import 'productsDB.ts' (voir les imports réalisés au-dessus)

  constructor() { }

  public getProducts() {
    return products;
  }

  // Une méthode getByID

  // A utiliser sur la page détail
  public getById(id: number) {
    // retourne le produit ayant l'id correspondant
  }

  // Rajouter un bouton de suppression sur la page /products
  public delete(id: number) {
    // Supprime le produit ayant l'id correspondant
  }

  // Rajouter une input sur la page /products
  public search(text: string) {
    // Renvoie une liste de produit
  }





  // NE PAS FAIRE !!!
  // Pour prochain exemple
  public add() {

  }

  // NE PAS FAIRE !!!
  // Pour prochain exemple
  public update() {

  }


}
