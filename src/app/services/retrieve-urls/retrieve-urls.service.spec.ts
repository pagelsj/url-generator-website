import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RetrieveUrlsService } from './retrieve-urls.service';

describe('RetrieveUrlsService', () => {
  let service: RetrieveUrlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(RetrieveUrlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
