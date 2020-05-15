import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { InvestModalComponent } from './modals/invest-modal/invest-modal.component';
import { AmountFormatPipe } from './pipes/amount-format.pipe';
import { StoreModule } from '@ngrx/store';
import { LoanReducer } from './store/reducers/loan.redusers';

const materialModules = [
  MatCardModule,
  MatDialogModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  declarations: [
    AppComponent,
    InvestModalComponent,
    AmountFormatPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({
      loans: LoanReducer
    }),
    ...materialModules
  ],
  providers: [],
  entryComponents: [
    InvestModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
