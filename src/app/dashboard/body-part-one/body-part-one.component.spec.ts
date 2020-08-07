import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyPartOneComponent } from './body-part-one.component';

describe('BodyPartOneComponent', () => {
  let component: BodyPartOneComponent;
  let fixture: ComponentFixture<BodyPartOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyPartOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyPartOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
