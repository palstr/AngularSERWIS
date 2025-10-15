import { TestBed } from '@angular/core/testing';

import { SerwisAutoService } from './serwis-auto.service';

describe('SerwisAutoService', () => {
  let service: SerwisAutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerwisAutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
