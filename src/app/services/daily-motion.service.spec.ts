import { TestBed } from '@angular/core/testing';

import { DailyMotionService } from './daily-motion.service';

describe('DailyMotionService', () => {
  let service: DailyMotionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailyMotionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
