import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuramaServiceListComponent } from './furama-service-list.component';

describe('FuramaServiceListComponent', () => {
  let component: FuramaServiceListComponent;
  let fixture: ComponentFixture<FuramaServiceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuramaServiceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuramaServiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
