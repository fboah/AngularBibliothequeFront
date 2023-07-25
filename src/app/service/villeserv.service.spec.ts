import { TestBed } from '@angular/core/testing';

import { VilleservService } from './villeserv.service';

describe('VilleservService', () => {
  let service: VilleservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VilleservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
