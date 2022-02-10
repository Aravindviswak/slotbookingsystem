import { TestBed } from '@angular/core/testing';

import { AssigndtosService } from './assigndtos.service';

describe('AssigndtosService', () => {
  let service: AssigndtosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssigndtosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
