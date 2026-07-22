import { TestBed } from '@angular/core/testing';

import { Consulados } from './consulados';

describe('Consulados', () => {
  let service: Consulados;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Consulados);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
