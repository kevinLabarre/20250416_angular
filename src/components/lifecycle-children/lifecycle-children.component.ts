import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-children',
  imports: [],
  templateUrl: './lifecycle-children.component.html',
  styleUrl: './lifecycle-children.component.css'
})
export class LifecycleChildrenComponent implements OnChanges {
  @Input() value: number = 0

  text: string = ""

  @Output() upadateParentValue: EventEmitter<number> = new EventEmitter<number>()

  // Une des utilisations type du onCHanges :
  // Quand un @input est modifié coté parent, et que la mise à jour ne s'affiche pas sur le rendu côté enfant
  // OU
  // Une action a lier au changement de valeur

  ngOnChanges(changes: SimpleChanges): void {
    // ATTENTION ! surveille les changement UNIQUEMENT fait côté parent !
    // Si on modifie value côté enfant, on ne pourra pas le surveiller avec un onChanges !
    if (changes['value']) {
      this.effetSecondaire()
    }
  }

  increment() {
    this.value += 1
  }

  effetSecondaire() {
    this.text = 'value est maintenant égale à ' + this.value
  }


}
