import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStepThreeComponentComponent } from './form-step-three-component.component';

describe('FormStepThreeComponentComponent', () => {
  let component: FormStepThreeComponentComponent;
  let fixture: ComponentFixture<FormStepThreeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormStepThreeComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormStepThreeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
