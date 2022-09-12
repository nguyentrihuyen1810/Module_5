import { TestBed } from '@angular/core/testing';

import { FuramaService } from './furama.service';

describe('FuramaService', () => {
  let service: FuramaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuramaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
