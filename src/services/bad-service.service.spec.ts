import { TestBed, inject } from '@angular/core/testing';

import { BadServiceService } from './bad-service.service';

describe('BadServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BadServiceService]
    });
  });

  it('should be created', inject([BadServiceService], (service: BadServiceService) => {
    expect(service).toBeTruthy();
  }));
});
