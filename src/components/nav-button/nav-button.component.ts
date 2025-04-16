import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-button',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-button.component.html',
  styleUrl: './nav-button.component.css'
})
export class NavButtonComponent {

  @Input() linkData: { routerLink: string, title: string } = { routerLink: "", title: "" }
}
