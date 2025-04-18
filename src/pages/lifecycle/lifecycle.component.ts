import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { LifecycleChildrenComponent } from "../../components/lifecycle-children/lifecycle-children.component";

@Component({
  selector: 'app-lifecycle',
  imports: [LifecycleChildrenComponent],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent implements OnInit, OnDestroy {

  value: number = 0

  constructor() {
    console.log('CONSTRUCTEUR')
  }

  ngOnInit(): void {
    console.log('OnInit')
  }

  ngOnDestroy(): void {
    console.log('onDestroy');
  }

  increment() {
    this.value += 1
  }

  updateValue(value: number) {
    console.log('updateValue parent', value)
    this.value = value
  }

}
