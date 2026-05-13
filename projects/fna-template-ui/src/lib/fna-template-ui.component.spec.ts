import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FnaTemplateUiComponent } from './fna-template-ui.component';

describe('FnaTemplateUiComponent', () => {
  let component: FnaTemplateUiComponent;
  let fixture: ComponentFixture<FnaTemplateUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FnaTemplateUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FnaTemplateUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
