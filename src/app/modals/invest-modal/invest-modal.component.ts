import { Component, Inject } from '@angular/core';
import { Loan } from '../../models/loan.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-invest-modal',
  templateUrl: './invest-modal.component.html',
  styleUrls: ['./invest-modal.component.scss']
})
export class InvestModalComponent {

  constructor(
    public dialogRef: MatDialogRef<InvestModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Loan
  ) { }

}
