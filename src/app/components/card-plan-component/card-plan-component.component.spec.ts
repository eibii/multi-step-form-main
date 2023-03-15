import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPlanComponentComponent } from './card-plan-component.component';

describe('CardPlanComponentComponent', () => {
  let component: CardPlanComponentComponent;
  let fixture: ComponentFixture<CardPlanComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPlanComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPlanComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
