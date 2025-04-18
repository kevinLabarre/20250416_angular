import { Routes } from '@angular/router';
import { ProductsComponent } from '../pages/products/products.component';
import { ProductDetailComponent } from '../pages/product-detail/product-detail.component';
import { DescriptionComponent } from '../components/description/description.component';
import { FicheTechComponent } from '../components/fiche-tech/fiche-tech.component';
import { DevisComponent } from '../components/devis/devis.component';
import { LoginComponent } from '../pages/login/login.component';
import { ProductApiComponent } from '../pages/product-api/product-api.component';
import { PokedexComponent } from '../pages/pokedex/pokedex.component';
import { LifecycleComponent } from '../pages/lifecycle/lifecycle.component';

export const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products-api', component: ProductApiComponent },
  {
    path: 'product/:id',
    component: ProductDetailComponent,
    children: [
      { path: 'description', component: DescriptionComponent }, // Accessible via http://localhost:4200/product/1/description
      { path: 'fiche-technique', component: FicheTechComponent },
      { path: 'devis', component: DevisComponent },
    ]
  },
  { path: 'pokedex', component: PokedexComponent },
  { path: 'cycle-de-vie', component: LifecycleComponent },
  { path: 'login', component: LoginComponent },
];
