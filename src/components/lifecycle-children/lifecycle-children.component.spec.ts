import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleChildrenComponent } from './lifecycle-children.component';

describe('LifecycleChildrenComponent', () => {
  let component: LifecycleChildrenComponent;
  let fixture: ComponentFixture<LifecycleChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecycleChildrenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecycleChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
