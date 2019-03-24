import { TestBed, inject } from '@angular/core/testing';

import { TriviaServiceService } from './trivia-service.service';

describe('TriviaServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TriviaServiceService]
    });
  });

  it('should be created', inject([TriviaServiceService], (service: TriviaServiceService) => {
    expect(service).toBeTruthy();
  }));
});
