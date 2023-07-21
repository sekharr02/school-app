import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { notifyGuard } from './notify.guard';

describe('notifyGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => notifyGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
