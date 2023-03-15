import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMobileComponentComponent } from './sidebar-mobile-component.component';

describe('SidebarMobileComponentComponent', () => {
  let component: SidebarMobileComponentComponent;
  let fixture: ComponentFixture<SidebarMobileComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarMobileComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarMobileComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
