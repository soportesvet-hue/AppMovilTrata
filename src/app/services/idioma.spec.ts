import { TestBed } from '@angular/core/testing';

import { Idioma } from './idioma';

describe('Idioma', () => {
  let service: Idioma;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Idioma);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
