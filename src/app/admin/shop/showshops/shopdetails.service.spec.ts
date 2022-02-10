import { TestBed } from '@angular/core/testing';

import { ShopdetailsService } from './shopdetails.service';

describe('ShopdetailsService', () => {
  let service: ShopdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
