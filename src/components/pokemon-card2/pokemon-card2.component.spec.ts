import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCard2Component } from './pokemon-card2.component';

describe('PokemonCard2Component', () => {
  let component: PokemonCard2Component;
  let fixture: ComponentFixture<PokemonCard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonCard2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
