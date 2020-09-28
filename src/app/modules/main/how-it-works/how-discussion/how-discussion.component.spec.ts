import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowDiscussionComponent } from './how-discussion.component';

describe('HowDiscussionComponent', () => {
  let component: HowDiscussionComponent;
  let fixture: ComponentFixture<HowDiscussionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowDiscussionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
