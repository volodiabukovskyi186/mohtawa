import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowResearchComponent } from './how-research.component';

describe('HowResearchComponent', () => {
  let component: HowResearchComponent;
  let fixture: ComponentFixture<HowResearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowResearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
