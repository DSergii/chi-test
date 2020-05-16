import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Loan } from './models/loan.model';
import { InvestModalComponent } from './modals/invest-modal/invest-modal.component';
import { MatDialog } from '@angular/material';
import { select, Store } from '@ngrx/store';
import { AppState } from './models/app-state.model';
import { LoanInvestAction } from './store/actions/loan.actions';
import { getTotal } from './store/reducers/loan.redusers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  loans$: Observable<Loan[]>;
  total$: Observable<number>;

  constructor(
    private store: Store<AppState>,
    private dialog: MatDialog,
  ) {
    this.loans$ = this.store.select(store => store.loans);
    this.total$ = store.pipe(select(getTotal()));
  }

  invest(item: Loan): void {
    const dialogRef = this.dialog.open(InvestModalComponent, {
      width: '400px',
      data: item
    });

    dialogRef.afterClosed().subscribe(invest => {
      if(invest) {
        item = {
          ...item,
          amount: (item.amount) as number - invest,
          invested: true
        };
        this.store.dispatch(new LoanInvestAction(item))
      }
    });
  }
}
