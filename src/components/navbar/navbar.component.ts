import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavButtonComponent } from "../nav-button/nav-button.component";

@Component({
  selector: 'app-navbar',
  imports: [NavButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
