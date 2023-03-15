import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepComponentComponent } from './step-component.component';

describe('StepComponentComponent', () => {
  let component: StepComponentComponent;
  let fixture: ComponentFixture<StepComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
