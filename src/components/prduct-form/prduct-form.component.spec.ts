import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrductFormComponent } from './prduct-form.component';

describe('PrductFormComponent', () => {
  let component: PrductFormComponent;
  let fixture: ComponentFixture<PrductFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrductFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
