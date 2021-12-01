import { TestBed } from '@angular/core/testing';

import { SelectedGuardGuard } from './selected-guard.guard';

describe('SelectedGuardGuard', () => {
  let guard: SelectedGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SelectedGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
