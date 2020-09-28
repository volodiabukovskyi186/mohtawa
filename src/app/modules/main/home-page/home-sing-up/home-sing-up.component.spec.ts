import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSingUpComponent } from './home-sing-up.component';

describe('HomeSingUpComponent', () => {
  let component: HomeSingUpComponent;
  let fixture: ComponentFixture<HomeSingUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSingUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSingUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
