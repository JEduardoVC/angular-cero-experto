import { TestBed } from '@angular/core/testing';

import { PlayListBodyStoreService } from './play-list-body-store.service';

describe('PlayListBodyStoreService', () => {
  let service: PlayListBodyStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayListBodyStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
