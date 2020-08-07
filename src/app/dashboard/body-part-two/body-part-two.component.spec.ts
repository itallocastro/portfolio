import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyPartTwoComponent } from './body-part-two.component';

describe('BodyPartTwoComponent', () => {
  let component: BodyPartTwoComponent;
  let fixture: ComponentFixture<BodyPartTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyPartTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyPartTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
