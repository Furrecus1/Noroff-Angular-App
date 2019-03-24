import { TestBed, inject } from '@angular/core/testing';

import { RickmortyServiceService } from './rickmorty-service.service';

describe('RickmortyServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RickmortyServiceService]
    });
  });

  it('should be created', inject([RickmortyServiceService], (service: RickmortyServiceService) => {
    expect(service).toBeTruthy();
  }));
});
