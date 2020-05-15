import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { InvestModalComponent } from './modals/invest-modal/invest-modal.component';
import { AmountFormatPipe } from './pipes/amount-format.pipe';

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
    ...materialModules
  ],
  providers: [],
  entryComponents: [
    InvestModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
