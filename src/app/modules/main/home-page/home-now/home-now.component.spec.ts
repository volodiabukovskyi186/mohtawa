import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNowComponent } from './home-now.component';

describe('HomeNowComponent', () => {
  let component: HomeNowComponent;
  let fixture: ComponentFixture<HomeNowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeNowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
