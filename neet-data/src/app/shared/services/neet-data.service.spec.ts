import { TestBed } from '@angular/core/testing';

import { NeetDataService } from './neet-data.service';

describe('NeetDataService', () => {
  let service: NeetDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NeetDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
