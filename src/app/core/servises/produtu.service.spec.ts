import { TestBed } from '@angular/core/testing';

import { ProdutuService } from './produtu.service';

describe('ProdutuService', () => {
  let service: ProdutuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
