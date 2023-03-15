import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStepOneComponentComponent } from './form-step-one-component.component';

describe('FormStepOneComponentComponent', () => {
  let component: FormStepOneComponentComponent;
  let fixture: ComponentFixture<FormStepOneComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormStepOneComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormStepOneComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
