import { TestBed } from '@angular/core/testing';

import { TxtReaderService } from './txt-reader.service';

describe('TxtReaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TxtReaderService = TestBed.get(TxtReaderService);
    expect(service).toBeTruthy();
  });
});
