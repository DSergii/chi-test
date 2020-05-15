import { Action } from '@ngrx/store';
import { Loan } from '../../models/loan.model';

export enum LoanActionTypes {
  LOAN_INVEST = '[LOAN] Invest',
}

export class LoanInvestAction implements Action {
  readonly type = LoanActionTypes.LOAN_INVEST;

  constructor(public payload: Loan) { }
}

export type LoanActions = LoanInvestAction