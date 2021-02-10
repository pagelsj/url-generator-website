import { TestBed } from '@angular/core/testing';

import { NewUrlService } from './new-url.service';

describe('NewUrlService', () => {
  let service: NewUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
