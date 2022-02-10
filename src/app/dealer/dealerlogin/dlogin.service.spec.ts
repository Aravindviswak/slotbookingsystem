import { TestBed } from '@angular/core/testing';

import { DloginService } from './dlogin.service';

describe('DloginService', () => {
  let service: DloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
