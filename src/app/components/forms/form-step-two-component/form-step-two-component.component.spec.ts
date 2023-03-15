import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStepTwoComponentComponent } from './form-step-two-component.component';

describe('FormStepTwoComponentComponent', () => {
  let component: FormStepTwoComponentComponent;
  let fixture: ComponentFixture<FormStepTwoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormStepTwoComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormStepTwoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
