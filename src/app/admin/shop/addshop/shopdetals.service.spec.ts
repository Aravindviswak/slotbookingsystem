import { TestBed } from '@angular/core/testing';

import { ShopdetalsService } from './shopdetals.service';

describe('ShopdetalsService', () => {
  let service: ShopdetalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopdetalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
