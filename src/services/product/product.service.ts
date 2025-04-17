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

  public getById(id: string): any {
    // Le .find() nous retournera le premier produit qui remplie notre condition "product.id === id"
    return products.find((product) => product.id === id)
  }

  // Rajouter un bouton de suppression sur la page /products
  public delete(id: string): any[] {
    // Le .find() nous retournera l'index du premier produit qui remplie notre condition "product.id === id"
    const productIndex = products.findIndex((product) => product.id === id)

    // Le 'findIndex" renvoie -1 si aucun produit n'a rempli notre condition "product.id === id"
    if (productIndex !== -1) {
      products.splice(productIndex, 1)
    }

    return this.getProducts()
  }

  // Rajouter une input sur la page /products
  public search(text: string): any[] {
    // Le .filter renvoie une liste des produits qui remplissent notre condition 'product.title.includes(text)
    return products.filter((product) => product.title.toLowerCase().includes(text.toLowerCase()));
  }


  // Sur page /products
  public add(product: any): any[] {
    products.push(product);
    return this.getProducts();
  }

  // Sur page 'détail' pour modifier le produit affiché
  public update(product: any) {
    const updateProductIndex = products.findIndex(p => p.id === product.id);
    if (updateProductIndex !== -1) {
      products.splice(updateProductIndex, 1, product)
      return products;
    } else {
      console.error("Erreur lors de la mise à jour du produit");
      return;
    }
  }

}
