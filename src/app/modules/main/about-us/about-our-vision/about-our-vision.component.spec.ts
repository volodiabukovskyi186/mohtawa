import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutOurVisionComponent } from './about-our-vision.component';

describe('AboutOurVisionComponent', () => {
  let component: AboutOurVisionComponent;
  let fixture: ComponentFixture<AboutOurVisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutOurVisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutOurVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
