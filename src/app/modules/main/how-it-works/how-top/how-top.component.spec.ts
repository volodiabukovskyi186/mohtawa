import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowTopComponent } from './how-top.component';

describe('HowTopComponent', () => {
  let component: HowTopComponent;
  let fixture: ComponentFixture<HowTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
