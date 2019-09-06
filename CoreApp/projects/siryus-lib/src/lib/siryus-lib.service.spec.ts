import { TestBed } from '@angular/core/testing';

import { SiryusLibService } from './siryus-lib.service';

describe('SiryusLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SiryusLibService = TestBed.get(SiryusLibService);
    expect(service).toBeTruthy();
  });
});
