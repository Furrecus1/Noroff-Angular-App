import { TestBed, inject } from '@angular/core/testing';

import { DogServiceService } from './dog-service.service';

describe('DogServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DogServiceService]
    });
  });

  it('should be created', inject([DogServiceService], (service: DogServiceService) => {
    expect(service).toBeTruthy();
  }));
});
