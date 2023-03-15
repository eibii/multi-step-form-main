import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMobileComponentComponent } from './form-mobile-component.component';

describe('FormMobileComponentComponent', () => {
  let component: FormMobileComponentComponent;
  let fixture: ComponentFixture<FormMobileComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMobileComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormMobileComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
