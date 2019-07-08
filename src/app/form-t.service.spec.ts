import { TestBed } from '@angular/core/testing';

import { FormTService } from './form-t.service';

describe('FormTService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormTService = TestBed.get(FormTService);
    expect(service).toBeTruthy();
  });
});
