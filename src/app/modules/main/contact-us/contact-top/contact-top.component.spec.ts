import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactTopComponent } from './contact-top.component';

describe('ContactTopComponent', () => {
  let component: ContactTopComponent;
  let fixture: ComponentFixture<ContactTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
