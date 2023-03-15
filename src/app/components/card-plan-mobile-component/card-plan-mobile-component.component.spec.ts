import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPlanMobileComponentComponent } from './card-plan-mobile-component.component';

describe('CardPlanMobileComponentComponent', () => {
  let component: CardPlanMobileComponentComponent;
  let fixture: ComponentFixture<CardPlanMobileComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPlanMobileComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPlanMobileComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
