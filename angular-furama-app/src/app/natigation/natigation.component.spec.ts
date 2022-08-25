import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NatigationComponent } from './natigation.component';

describe('NatigationComponent', () => {
  let component: NatigationComponent;
  let fixture: ComponentFixture<NatigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NatigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NatigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
