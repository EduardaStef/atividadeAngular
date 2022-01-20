import { TestBed } from '@angular/core/testing';

import { DialoguesService } from './dialogues.service';

describe('DialoguesService', () => {
  let service: DialoguesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialoguesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
