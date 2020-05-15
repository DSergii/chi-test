import { Loan } from './loan.model';

export interface AppState {
  readonly loans: Array<Loan>
}