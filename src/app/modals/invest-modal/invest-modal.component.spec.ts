import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestModalComponent } from './invest-modal.component';
import { AmountFormatPipe } from '../../pipes/amount-format.pipe';
import { RemainingConvertPipe } from '../../pipes/remaining-convert.pipe';
import { MAT_DIALOG_DATA, MatButtonModule, MatDialogModule, MatDialogRef, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('InvestModalComponent', () => {
  let component: InvestModalComponent;
  let fixture: ComponentFixture<InvestModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MatDialogModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule
      ],
      declarations: [ InvestModalComponent, AmountFormatPipe, RemainingConvertPipe ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
