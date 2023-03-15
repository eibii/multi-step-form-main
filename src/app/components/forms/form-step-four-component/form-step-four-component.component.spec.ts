import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStepFourComponentComponent } from './form-step-four-component.component';

describe('FormStepFourComponentComponent', () => {
  let component: FormStepFourComponentComponent;
  let fixture: ComponentFixture<FormStepFourComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormStepFourComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormStepFourComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
