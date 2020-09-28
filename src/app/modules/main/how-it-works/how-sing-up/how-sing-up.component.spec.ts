import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowSingUpComponent } from './how-sing-up.component';

describe('HowSingUpComponent', () => {
  let component: HowSingUpComponent;
  let fixture: ComponentFixture<HowSingUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowSingUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowSingUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
