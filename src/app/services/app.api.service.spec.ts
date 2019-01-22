import { TestBed } from '@angular/core/testing';

import { App.ApiService } from './app.api.service';

describe('App.ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: App.ApiService = TestBed.get(App.ApiService);
    expect(service).toBeTruthy();
  });
});
