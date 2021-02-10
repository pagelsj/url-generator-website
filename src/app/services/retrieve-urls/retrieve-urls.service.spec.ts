import { TestBed } from '@angular/core/testing';

import { RetrieveUrlsService } from './retrieve-urls.service';

describe('RetrieveUrlsService', () => {
  let service: RetrieveUrlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetrieveUrlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
