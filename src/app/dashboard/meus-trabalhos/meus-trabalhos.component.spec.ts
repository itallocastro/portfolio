import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusTrabalhosComponent } from './meus-trabalhos.component';

describe('MeusTrabalhosComponent', () => {
  let component: MeusTrabalhosComponent;
  let fixture: ComponentFixture<MeusTrabalhosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeusTrabalhosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeusTrabalhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
