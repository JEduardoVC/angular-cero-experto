import { TestBed } from '@angular/core/testing';

import { TracksStoreService } from './tracks-store.service';

describe('TracksStoreService', () => {
  let service: TracksStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TracksStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
