import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheTechComponent } from './fiche-tech.component';

describe('FicheTechComponent', () => {
  let component: FicheTechComponent;
  let fixture: ComponentFixture<FicheTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FicheTechComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FicheTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
