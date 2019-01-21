import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodePanelComponent } from './qrcode-panel.component';

describe('QrcodePanelComponent', () => {
  let component: QrcodePanelComponent;
  let fixture: ComponentFixture<QrcodePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrcodePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrcodePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
