import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOnsComponentComponent } from './add-ons-component.component';

describe('AddOnsComponentComponent', () => {
  let component: AddOnsComponentComponent;
  let fixture: ComponentFixture<AddOnsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOnsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOnsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
