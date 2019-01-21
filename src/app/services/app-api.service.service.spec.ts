import { TestBed, inject } from '@angular/core/testing';

import { AppApi.ServiceService } from './app-api.service.service';

describe('AppApi.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppApi.ServiceService]
    });
  });

  it('should be created', inject([AppApi.ServiceService], (service: AppApi.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
