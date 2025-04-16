import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", Validators.required)
  })


  onSubmit() {
    // Que mes champs soient en erreur ou non, on exécutera toujours le 'submit'
    if (this.loginForm.valid) {

      // le .value retourne un objet qui contient les valeurs de tous mes champs
      // Chaque 'formControlName' devenant un des nom des attributs de l'objet
      let result = this.loginForm.value
      console.log(result)
    } else {
      console.error("Formulaire non valide !!")
    }
  }

  // Renvoie true/false en fonction de si le champs est en erreur ou non
  get emailErrors() {
    return this.loginForm.get('email')?.errors
  }

  get emailTouched() {
    return this.loginForm.get('email')?.touched
  }

  // Renvoie true/false en fonction de si le champs est en erreur ou non
  get passwordErrors() {
    return this.loginForm.get('password')?.errors
  }

  get emailRequired() {
    if (this.emailErrors) {
      return this.emailErrors['required']
    }
  }

}
