import { TestBed } from '@angular/core/testing';

import { ApistudentService } from './apistudent.service';

describe('ApistudentService', () => {
  let service: ApistudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApistudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
