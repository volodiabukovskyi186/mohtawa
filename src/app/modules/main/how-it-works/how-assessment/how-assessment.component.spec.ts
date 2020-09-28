import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowAssessmentComponent } from './how-assessment.component';

describe('HowAssessmentComponent', () => {
  let component: HowAssessmentComponent;
  let fixture: ComponentFixture<HowAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
