import { TestBed } from '@angular/core/testing';

import { MathTrainerService } from './math-trainer.service';

describe('MathTrainerService', () => {
  let service: MathTrainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathTrainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
