import { TestBed } from '@angular/core/testing';

import { FnaTemplateUiService } from './fna-template-ui.service';

describe('FnaTemplateUiService', () => {
  let service: FnaTemplateUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FnaTemplateUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
