import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowImplementationComponent } from './how-implementation.component';

describe('HowImplementationComponent', () => {
  let component: HowImplementationComponent;
  let fixture: ComponentFixture<HowImplementationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowImplementationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowImplementationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
