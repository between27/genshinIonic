import { TestBed } from '@angular/core/testing';

import { GenshinCharactersService } from './genshin-characters.service';

describe('GenshinCharactersService', () => {
  let service: GenshinCharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenshinCharactersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
