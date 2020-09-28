import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProblemComponent } from './home-problem.component';

describe('HomeProblemComponent', () => {
  let component: HomeProblemComponent;
  let fixture: ComponentFixture<HomeProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
