import { Component } from '@angular/core';
import { LoanService } from './services/loan.service';
import { Observable } from 'rxjs';
import { Loan } from './models/loan.model';
import { map } from 'rxjs/internal/operators';
import { InvestModalComponent } from './modals/invest-modal/invest-modal.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  loans$: Observable<Loan[]>;
  total: number = 0;

  constructor(
    private loanService: LoanService,
    private dialog: MatDialog,
  ) {
    this.loans$ = this.loanService.getLoans()
      .pipe(
        map(value => {
          const loans =  value['loans'];
          loans.forEach(item => this.total += parseInt(item.amount));
          return loans;
        })
      );
  }

  invest(item: Loan): void {
    const dialogRef = this.dialog.open(InvestModalComponent, {
      width: '400px',
      data: item
    });

    dialogRef.afterClosed().subscribe(invest => {
      if(invest) {
        console.log( 'item ::: ', item );
        item = {
          ...item,
          amount: (item.amount) as number - invest,
          invested: true
        }
      }
    });
  }
}
