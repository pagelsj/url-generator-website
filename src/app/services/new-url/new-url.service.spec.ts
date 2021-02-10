import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NewUrlService } from './new-url.service';

describe('NewUrlService', () => {
  let service: NewUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(NewUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
