import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product/product.service';
import { title } from 'process';

@Component({
  selector: 'app-prduct-form',
  imports: [ReactiveFormsModule],
  templateUrl: './prduct-form.component.html',
  styleUrl: './prduct-form.component.css'
})
export class PrductFormComponent implements OnInit {

  productForm: FormGroup;

  // Produit a mettre à jour dans le cas d'un update
  @Input() product: any = null

  @Output() productChange: EventEmitter<any> = new EventEmitter();

  constructor(private service: ProductService) {
    this.productForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      price: new FormControl('', [Validators.required, Validators.min(0)]),
      image: new FormControl(''),
      description: new FormControl('', Validators.required),
      slug: new FormControl('', Validators.required),
      category: new FormControl(''),
    });
  }

  ngOnInit(): void {
    if (this.product !== null) {
      this.productForm.setValue({
        title: this.product.title,
        price: this.product.price,
        image: this.product.image,
        description: this.product.description,
        slug: this.product.slug,
        category: this.product.category
      })
    }
  }

  errors(inputName: string) {
    return this.productForm.get(inputName)?.errors
  }

  touched(inputName: string) {
    return this.productForm.get(inputName)?.touched
  }

  // Pour gérer le message d'erreur de mon 'maxLength' sur le champ 'title'
  get titleErrorMaxLength() {
    const error = this.errors('title');
    return error?.['maxlength'];
  }

  // Pour gérer les messages d'erreurs de tous les Required
  getErrorsRequired(inputName: string) {
    const error = this.errors(inputName);
    return error?.['required'];
  }

  // Pour gérer le message d'erreur de mon 'min' sur le champ 'price'
  get priceMinError() {
    const error = this.errors('price');
    return error?.['min'];
  }

  onSubmit() {
    if (this.productForm.valid) {
      if (this.product) {
        // Injecter l'id, puisqu'il n'est pas dans le formulaire
        const updateProduct = { ...this.productForm.value, id: this.product.id }
        const newProduct = this.service.update(updateProduct)
        this.productChange.emit(newProduct)
        this.productForm.setValue({
          title: newProduct.title,
          price: newProduct.price,
          image: newProduct.image,
          description: newProduct.description,
          slug: newProduct.slug,
          category: newProduct.category
        })
      } else {
        this.service.add(this.productForm.value);
        this.productForm.reset();
      }
    } else {
      console.error('Formulaire mal rempli !')
    }
  }

}
