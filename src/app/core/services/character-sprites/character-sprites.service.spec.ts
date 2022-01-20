import { TestBed } from '@angular/core/testing';

import { CharacterSpritesService } from './character-sprites.service';

describe('CharacterSpritesService', () => {
  let service: CharacterSpritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterSpritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
