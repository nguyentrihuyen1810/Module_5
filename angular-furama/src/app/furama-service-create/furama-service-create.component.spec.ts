import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuramaServiceCreateComponent } from './furama-service-create.component';

describe('FuramaServiceCreateComponent', () => {
  let component: FuramaServiceCreateComponent;
  let fixture: ComponentFixture<FuramaServiceCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuramaServiceCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuramaServiceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
